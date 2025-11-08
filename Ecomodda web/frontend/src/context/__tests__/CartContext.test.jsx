import React from 'react';
import { render, waitFor, act } from '@testing-library/react';
import { CartProvider, useCart } from '../CartContext';
import { cartService } from '../../services/cartService';

jest.mock('../../services/cartService', () => ({
  cartService: {
    getCart: jest.fn(),
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
    updateQuantity: jest.fn(),
    clearCart: jest.fn()
  }
}));

describe('CartContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  const renderWithProvider = () => {
    let contextValue;
    const Consumer = () => {
      contextValue = useCart();
      return null;
    };

    render(
      <CartProvider>
        <Consumer />
      </CartProvider>
    );

    return () => contextValue;
  };

  test('skips fetching when no token exists', async () => {
    const getContext = renderWithProvider();
    await waitFor(() => expect(getContext()?.loading).toBe(false));
    expect(getContext().cart).toEqual([]);
    expect(cartService.getCart).not.toHaveBeenCalled();
  });

  test('fetches cart items when authenticated with real token', async () => {
    localStorage.setItem('token', 'real-token');
    const serviceItems = [
      {
        product: { _id: '1', name: 'Remote Item', price: 12000 },
        quantity: 2
      }
    ];
    cartService.getCart.mockResolvedValue(serviceItems);

    const getContext = renderWithProvider();

    await waitFor(() => expect(getContext()?.loading).toBe(false));
    expect(cartService.getCart).toHaveBeenCalledTimes(1);
    expect(getContext().cart).toEqual(serviceItems);
  });

  test('restores fake cart from storage when using fake auth token', async () => {
    localStorage.setItem('token', 'fake-jwt-token');
    const storedItems = [
      {
        product: { _id: '1', name: 'Stored', price: 5000 },
        quantity: 1
      }
    ];
    localStorage.setItem('fakeCart', JSON.stringify(storedItems));

    const getContext = renderWithProvider();

    await waitFor(() => expect(getContext()?.loading).toBe(false));
    expect(getContext().cart).toEqual(storedItems);
    expect(cartService.getCart).not.toHaveBeenCalled();
  });

  test('addToCart updates state and storage for fake auth users', async () => {
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('fakeCart', JSON.stringify([]));

    const product = { _id: '55', name: 'Sneakers', price: 45000 };

    const getContext = renderWithProvider();

    await waitFor(() => expect(getContext()?.loading).toBe(false));

    act(() => {
      getContext().addToCart(product, 1);
    });

    await waitFor(() => expect(getContext().cart.length).toBe(1));
    expect(getContext().cart[0]).toEqual({ product, quantity: 1 });
    expect(JSON.parse(localStorage.getItem('fakeCart'))).toEqual([{ product, quantity: 1 }]);
    expect(cartService.addToCart).not.toHaveBeenCalled();
  });

  test('getCartTotal returns aggregated total', async () => {
    localStorage.setItem('token', 'fake-jwt-token');
    localStorage.setItem('fakeCart', JSON.stringify([]));

    const firstProduct = { _id: 'a1', name: 'Jacket', price: 80000 };
    const secondProduct = { _id: 'b2', name: 'Shirt', price: 35000 };

    const getContext = renderWithProvider();

    await waitFor(() => expect(getContext()?.loading).toBe(false));

    act(() => {
      getContext().addToCart(firstProduct, 2);
      getContext().addToCart(secondProduct, 3);
    });

    await waitFor(() => expect(getContext().cart.length).toBe(2));
    expect(getContext().getCartTotal()).toBe(2 * 80000 + 3 * 35000);
  });
});
