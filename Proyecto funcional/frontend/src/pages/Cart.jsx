import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Breadcrumb from '../components/Breadcrumb';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 100000 ? 0 : 10000;
  const total = subtotal + shipping;

  const breadcrumbItems = [
    { label: 'Carrito de Compras' }
  ];

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <Breadcrumb items={breadcrumbItems} />
        <h2>Tu carrito de compras</h2>
        <div className="alert alert-info">
          <p>Tu carrito está vacío</p>
          <Link to="/productos" className="btn btn-primary">
            Continuar comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <Breadcrumb items={breadcrumbItems} />
      <h2>Tu carrito de compras</h2>
      <div className="row">
        <div className="col-md-8">
          {cart.map((item) => (
            <div key={item.product._id} className="card mb-3">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-md-2">
                    <img 
                      src={item.product.images[0]} 
                      alt={item.product.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-4">
                    <h5>{item.product.name}</h5>
                    <p className="text-muted">{item.product.category}</p>
                  </div>
                  <div className="col-md-2">
                    <p className="h5">$ {item.product.price.toLocaleString('es-CO')}</p>
                  </div>
                  <div className="col-md-2">
                    <div className="d-flex align-items-center">
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleQuantityChange(item.product._id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button 
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button 
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.product._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <button 
            className="btn btn-outline-danger"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5>Resumen de compra</h5>
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>$ {subtotal.toLocaleString('es-CO')}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío:</span>
                <span>$ {shipping.toLocaleString('es-CO')}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-3 fw-bold">
                <span>Total:</span>
                <span>$ {total.toLocaleString('es-CO')}</span>
              </div>
              
              <Link to="/checkout" className="btn btn-primary w-100">
                Proceder al pago
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;