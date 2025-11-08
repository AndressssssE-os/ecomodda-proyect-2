import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { cartService } from '../services/cartService';

const CartContext = createContext();

const FAKE_TOKEN = 'fake-jwt-token';
const FAKE_CART_KEY = 'fakeCart';

const isFakeAuth = () => localStorage.getItem('token') === FAKE_TOKEN;

const loadFakeCart = () => {
  try {
    const storedCart = localStorage.getItem(FAKE_CART_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error('Error loading fake cart from storage:', error);
    return [];
  }
};

const saveFakeCart = (items) => {
  try {
    localStorage.setItem(FAKE_CART_KEY, JSON.stringify(items));
  } catch (error) {
    console.error('Error saving fake cart to storage:', error);
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return { ...state, items: action.payload, loading: false };
    case 'ADD_ITEM':
      const existingItem = state.items.find(item => item.product._id === action.payload.product._id);
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.product._id === action.payload.product._id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.product._id !== action.payload)
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.product._id === action.payload.productId
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

const initialState = {
  items: [],
  loading: true
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // Solo cargar el carrito si hay un token (usuario autenticado)
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch({ type: 'SET_LOADING', payload: false });
      return;
    }

    if (isFakeAuth()) {
      const fakeItems = loadFakeCart();
      dispatch({ type: 'SET_CART', payload: fakeItems });
      dispatch({ type: 'SET_LOADING', payload: false });
    } else {
      loadCart();
    }
  }, []);

  const loadCart = async () => {
    try {
      const cartResponse = await cartService.getCart();
      const normalizedItems = cartResponse?.data ?? cartResponse ?? [];
      dispatch({ type: 'SET_CART', payload: normalizedItems });
      dispatch({ type: 'SET_LOADING', payload: false });
    } catch (error) {
      console.error('Error loading cart:', error);
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  const addToCart = async (product, quantity = 1) => {
    try {
      if (isFakeAuth()) {
        dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
        const updatedItems = (() => {
          const existingItem = state.items.find(item => item.product._id === product._id);
          if (existingItem) {
            return state.items.map(item =>
              item.product._id === product._id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
          }
          return [...state.items, { product, quantity }];
        })();
        saveFakeCart(updatedItems);
      } else {
        await cartService.addToCart(product._id, quantity);
        dispatch({ type: 'ADD_ITEM', payload: { product, quantity } });
      }

      // Mostrar notificación
      if (window.showAlert) {
        window.showAlert('Producto agregado al carrito', 'success');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
  };

  const removeFromCart = async (productId) => {
    try {
      if (isFakeAuth()) {
        dispatch({ type: 'REMOVE_ITEM', payload: productId });
        const updatedItems = state.items.filter(item => item.product._id !== productId);
        saveFakeCart(updatedItems);
      } else {
        await cartService.removeFromCart(productId);
        dispatch({ type: 'REMOVE_ITEM', payload: productId });
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  };

  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) {
      await removeFromCart(productId);
      return;
    }
    
    try {
      if (isFakeAuth()) {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
        const updatedItems = state.items.map(item =>
          item.product._id === productId
            ? { ...item, quantity }
            : item
        );
        saveFakeCart(updatedItems);
      } else {
        await cartService.updateQuantity(productId, quantity);
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
      throw error;
    }
  };

  const clearCart = async () => {
    try {
      if (isFakeAuth()) {
        dispatch({ type: 'CLEAR_CART' });
        saveFakeCart([]);
      } else {
        await cartService.clearCart();
        dispatch({ type: 'CLEAR_CART' });
      }
    } catch (error) {
      console.error('Error clearing cart:', error);
      throw error;
    }
  };

  const getCartCount = () => {
    return state.items.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return state.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{
      cart: state.items,
      loading: state.loading,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartCount,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};