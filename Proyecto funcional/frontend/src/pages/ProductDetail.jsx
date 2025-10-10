import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Breadcrumb from '../components/Breadcrumb';
import { productService } from '../services/productService';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      setLoading(true);
      const productData = await productService.getProductById(id);
      
      // productService ya devuelve el producto directamente
      if (productData && productData._id) {
        setProduct(productData);
      } else {
        console.error('Producto no válido:', productData);
        setProduct(null);
      }
    } catch (error) {
      console.error('Error loading product:', error);
      console.error('Error details:', error.response?.data);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      alert('Producto agregado al carrito');
    }
  };

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-4">
        <Breadcrumb items={[{ label: 'Productos', path: '/productos' }, { label: 'Producto no encontrado' }]} />
        <div className="row">
          <div className="col-12 text-center py-5">
            <div className="alert alert-warning d-inline-block">
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
              <h4 className="mb-3">Producto no encontrado</h4>
              <p className="mb-3">Lo sentimos, el producto que buscas no está disponible o no existe.</p>
              <Link to="/productos" className="btn btn-primary">
                <i className="bi bi-arrow-left me-2"></i>
                Volver al catálogo
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Productos', path: '/productos' },
    { label: product.category?.charAt(0).toUpperCase() + product.category?.slice(1), path: `/productos?cat=${product.category}` },
    { label: product.name }
  ];

  return (
    <div className="container mt-4">
      <Breadcrumb items={breadcrumbItems} />

      <div className="row">
        <div className="col-md-6 text-center">
          <img 
            src={product.images[0]} 
            className="img-fluid rounded" 
            alt={product.name}
            style={{ maxHeight: '500px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="h2 mb-2">{product.name}</h1>
          <div className="category-badge d-inline-block mb-2 text-capitalize">
            {product.category}
          </div>
          <p className="h3 text-accent mb-3">$ {product.price.toLocaleString('es-CO')}</p>
          <p className="mb-4">{product.description}</p>
          
          <div className="d-flex align-items-center mb-3">
            <label htmlFor="quantity" className="me-3">Cantidad:</label>
            <input 
              type="number" 
              id="quantity"
              className="form-control w-25" 
              min="1" 
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </div>
          
          <div className="d-flex gap-2">
            <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
            <Link to="/productos" className="btn btn-outline-light btn-lg">
              Seguir comprando
            </Link>
          </div>
          
          <div className="mt-4">
            <h5>Detalles del producto</h5>
            <ul className="list-unstyled">
              <li><strong>Material:</strong> Algodón orgánico</li>
              <li><strong>Condición:</strong> {product.condition}</li>
              <li><strong>Talla:</strong> {product.size}</li>
              <li><strong>Género:</strong> {product.gender}</li>
              <li><strong>Envío:</strong> Gratis para compras superiores a $100.000</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;