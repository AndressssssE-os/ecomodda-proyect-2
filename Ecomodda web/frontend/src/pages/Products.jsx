import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Breadcrumb from '../components/Breadcrumb';
import { productService } from '../services/productService';

const Products = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: searchParams.get('cat') || '',
    gender: searchParams.get('gender') || '',
    search: searchParams.get('search') || ''
  });

  useEffect(() => {
    // Actualizar filtros cuando cambien los parámetros de URL
    setFilters({
      category: searchParams.get('cat') || '',
      gender: searchParams.get('gender') || '',
      search: searchParams.get('search') || ''
    });
  }, [searchParams]);

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getProducts(filters);
      setProducts(data.data || data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  // Generar breadcrumb dinámico
  const getBreadcrumbItems = () => {
    const items = [{ label: 'Productos', path: '/productos' }];
    
    if (filters.gender) {
      items.push({ 
        label: filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1), 
        path: `/productos?gender=${filters.gender}` 
      });
    }
    
    if (filters.category) {
      items.push({ 
        label: filters.category.charAt(0).toUpperCase() + filters.category.slice(1), 
        path: `/productos?${filters.gender ? `gender=${filters.gender}&` : ''}cat=${filters.category}` 
      });
    }
    
    if (filters.search) {
      items.push({ label: `Búsqueda: "${filters.search}"` });
    }
    
    return items;
  };

  // Generar título dinámico
  const getPageTitle = () => {
    if (filters.search) {
      return `Resultados para "${filters.search}"`;
    }
    
    let title = '';
    if (filters.gender) {
      title += filters.gender.charAt(0).toUpperCase() + filters.gender.slice(1);
    }
    if (filters.category) {
      title += (title ? ' - ' : '') + filters.category.charAt(0).toUpperCase() + filters.category.slice(1);
    }
    
    return title || 'Todos los productos';
  };

  return (
    <div className="container mt-4">
      <Breadcrumb items={getBreadcrumbItems()} />
      
      <div className="row">
        <aside className="col-md-3 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">Filtros</h5>
              
              <h6 className="mt-3">Género</h6>
              {['hombre', 'mujer', 'unisex'].map(gen => (
                <div key={gen} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="genderFilter"
                    id={`filter-${gen}`}
                    checked={filters.gender === gen}
                    onChange={() => handleFilterChange({ gender: gen })}
                  />
                  <label className="form-check-label text-capitalize" htmlFor={`filter-${gen}`}>
                    {gen}
                  </label>
                </div>
              ))}
              
              <h6 className="mt-3">Categorías</h6>
              {['chaquetas', 'hoodies', 'camisas', 'pantalones', 'accesorios'].map(cat => (
                <div key={cat} className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="categoryFilter"
                    id={`filter-cat-${cat}`}
                    checked={filters.category === cat}
                    onChange={() => handleFilterChange({ category: cat })}
                  />
                  <label className="form-check-label text-capitalize" htmlFor={`filter-cat-${cat}`}>
                    {cat}
                  </label>
                </div>
              ))}
              
              <button 
                className="btn btn-outline-light mt-3 w-100"
                onClick={() => handleFilterChange({ category: '', gender: '', search: '' })}
              >
                Limpiar Filtros
              </button>
            </div>
          </div>
        </aside>

        <section className="col-md-9">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4>{getPageTitle()}</h4>
            <span className="text-muted">{products.length} productos</span>
          </div>
          
          <div className="row">
            {loading ? (
              <div className="col-12 text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
              </div>
            ) : products.length > 0 ? (
              products.map(product => (
                <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <div className="alert alert-info">
                  <i className="bi bi-info-circle me-2"></i>
                  No se encontraron productos con los filtros seleccionados
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;