import api from './api';

export const productService = {
  async getProducts(filters = {}) {
    try {
      const params = new URLSearchParams();
      
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          params.append(key, filters[key]);
        }
      });

      const response = await api.get(`/products?${params}`);
      return response.data;
    } catch (error) {
      console.error('Error en getProducts:', error);
      throw error;
    }
   },

  async getProductById(id) {
    try {
      const response = await api.get(`/products/${id}`);
      // Si la respuesta tiene success: true, devolver data
      if (response.data.success && response.data.data) {
        return response.data.data;
      }
      // Si no, devolver la respuesta completa
      return response.data;
    } catch (error) {
      console.error('Error en getProductById:', error);
      throw error;
    }
  },

  async getFeaturedProducts() {
    try {
      const response = await api.get('/products/featured');
      if (response.data.success && response.data.data) {
        return response.data.data;
      }
      return response.data;
    } catch (error) {
      console.error('Error en getFeaturedProducts:', error);
      throw error;
    }
  },

  async searchProducts(query) {
    const response = await api.get(`/products/search?q=${encodeURIComponent(query)}`);
    return response.data.data || response.data;
  },

  async getProductsByCategory(category) {
    const response = await api.get(`/products/category/${category}`);
    return response.data.data || response.data;
  }
};