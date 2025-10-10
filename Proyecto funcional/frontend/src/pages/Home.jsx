import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { productService } from '../services/productService';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFeaturedProducts();
  }, []);

  const loadFeaturedProducts = async () => {
    try {
      const products = await productService.getFeaturedProducts();
      setFeaturedProducts(products);
    } catch (error) {
      console.error('Error loading featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero text-center mb-5 py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="fw-bold display-4 mb-4">
              Tienda de ropa de <span style={{ color: 'var(--accent)' }}>segunda mano vintage</span>
            </h1>
            <p className="lead mb-4">
              Moda sostenible: vintage, gothic y grunge. Redescubre prendas únicas con historia.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/productos" className="btn btn-custom btn-lg">
                Ver catálogo completo
              </Link>
              <a href="#destacados" className="btn btn-outline-light btn-lg">
                Productos destacados
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="mb-5">
        <h2 className="text-center mb-4">Explora por categorías</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <i className="bi bi-jacket display-4 mb-3" style={{ color: 'var(--accent)' }}></i>
                <h3>Chaquetas</h3>
                <p>Chaquetas vintage únicas con estilo retro</p>
                <Link to="/productos?cat=chaquetas" className="btn btn-outline-light mt-2">
                  Ver colección
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <i className="bi bi-person display-4 mb-3" style={{ color: 'var(--accent)' }}></i>
                <h3>Hoodies</h3>
                <p>Sudaderas con personalidad y historia</p>
                <Link to="/productos?cat=hoodies" className="btn btn-outline-light mt-2">
                  Ver colección
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 text-center">
              <div className="card-body">
                <i className="bi bi-gem display-4 mb-3" style={{ color: 'var(--accent)' }}></i>
                <h3>Accesorios</h3>
                <p>Complementos que marcan la diferencia</p>
                <Link to="/productos?cat=accesorios" className="btn btn-outline-light mt-2">
                  Ver colección
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="destacados" className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Productos destacados</h2>
          <Link to="/productos" className="btn btn-sm btn-outline-light">
            Ver todos
          </Link>
        </div>
        
        <div className="row">
          {loading ? (
            <div className="col-12 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Cargando...</span>
              </div>
            </div>
          ) : (
            featuredProducts.map(product => (
              <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 mb-4">
                <ProductCard product={product} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;