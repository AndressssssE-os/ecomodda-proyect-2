import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div className="card h-100 product-card">
      <img 
        src={`/${product.images[0].replace(/^\//, '')}`}
        className="card-img-top product-image" 
        alt={product.name}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title">{product.name}</h6>
        <small className="text-muted mb-2">
          {product.category} • {product.subCategory}
        </small>
        <p className="card-text small flex-grow-1">{product.description}</p>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-accent">
              $ {product.price.toLocaleString('es-CO')}
            </span>
            <div className="btn-group">
              <Link 
                to={`/producto/${product._id}`} 
                className="btn btn-sm btn-outline-light"
              >
                Ver
              </Link>
              <button 
                className="btn btn-sm btn-primary"
                onClick={handleAddToCart}
              >
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;