jest.mock('../api', () => ({
  __esModule: true,
  default: {
    get: jest.fn()
  }
}));

import api from '../api';
import { productService } from '../productService';

describe('productService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('getProducts builds query string with truthy filters', async () => {
    api.get.mockResolvedValue({ data: { items: [] } });

    await productService.getProducts({ category: 'vintage', search: '', color: 'blue' });

    expect(api.get).toHaveBeenCalledWith('/products?category=vintage&color=blue');
  });

  test('getProductById returns nested data when success flag is true', async () => {
    const payload = { success: true, data: { id: 'p1' } };
    api.get.mockResolvedValue({ data: payload });

    const result = await productService.getProductById('p1');

    expect(api.get).toHaveBeenCalledWith('/products/p1');
    expect(result).toEqual({ id: 'p1' });
  });

  test('getProductsByCategory requests endpoint and returns payload data', async () => {
    api.get.mockResolvedValue({ data: { data: ['item'] } });

    const result = await productService.getProductsByCategory('tops');

    expect(api.get).toHaveBeenCalledWith('/products/category/tops');
    expect(result).toEqual(['item']);
  });
});
