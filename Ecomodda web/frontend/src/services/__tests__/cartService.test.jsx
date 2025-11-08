jest.mock('../api', () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn()
  }
}));

import api from '../api';
import { cartService } from '../cartService';

describe('cartService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getCart requests items and returns response data', async () => {
    api.get.mockResolvedValue({ data: ['item'] });

    const result = await cartService.getCart();

    expect(api.get).toHaveBeenCalledWith('/cart');
    expect(result).toEqual(['item']);
  });

  test('addToCart posts payload with product id and quantity', async () => {
    api.post.mockResolvedValue({ data: { success: true } });

    const result = await cartService.addToCart('product-1', 3);

    expect(api.post).toHaveBeenCalledWith('/cart/items', { productId: 'product-1', quantity: 3 });
    expect(result).toEqual({ success: true });
  });

  test('clearCart deletes cart items and returns data', async () => {
    api.delete.mockResolvedValue({ data: 'cleared' });

    const result = await cartService.clearCart();

    expect(api.delete).toHaveBeenCalledWith('/cart');
    expect(result).toBe('cleared');
  });
});
