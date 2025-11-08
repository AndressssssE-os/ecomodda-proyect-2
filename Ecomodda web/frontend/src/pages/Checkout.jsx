import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Breadcrumb from '../components/Breadcrumb';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    paymentMethod: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('idle'); // idle | success | error

  const subtotal = getCartTotal();
  const shipping = subtotal > 100000 ? 0 : 10000;
  const total = subtotal + shipping;

  const breadcrumbItems = [
    { label: 'Carrito', path: '/carrito' },
    { label: 'Finalizar Compra' }
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.paymentMethod) {
      setPaymentStatus('error');
      return;
    }

    try {
      setIsProcessing(true);
      setPaymentStatus('idle');

      // Simula una llamada a API de pago para un checkout falso
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setPaymentStatus('success');
      clearCart();
      setFormData({
        fullName: '',
        address: '',
        city: '',
        phone: '',
        email: '',
        paymentMethod: ''
      });
    } catch (error) {
      console.error('Fake checkout error:', error);
      setPaymentStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="container mt-4">
      <Breadcrumb items={breadcrumbItems} />
      <h2>Finalizar compra</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-4">
            <div className="card-header">
              <h5>Resumen del pedido</h5>
            </div>
            <div className="card-body">
              {cart.map((item) => (
                <div key={item.product._id} className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img 
                      src={`/${item.product.images[0].replace(/^\//, '')}`}
                      alt={item.product.name}
                      width="60"
                      height="60"
                      style={{ objectFit: 'cover', borderRadius: '5px' }}
                      className="me-3"
                    />
                    <div>
                      <h6 className="mb-0">{item.product.name}</h6>
                      <small className="text-muted">Cantidad: {item.quantity}</small>
                    </div>
                  </div>
                  <span>$ {(item.product.price * item.quantity).toLocaleString('es-CO')}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h5>Información de envío</h5>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Ciudad</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <h6>Método de pago</h6>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="creditCard"
                    value="creditCard"
                    checked={formData.paymentMethod === 'creditCard'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="creditCard">
                    Tarjeta de crédito/débito
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="nequi"
                    value="nequi"
                    checked={formData.paymentMethod === 'nequi'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="nequi">
                    Nequi
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="cash"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="cash">
                    Contra entrega
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={isProcessing}>
                  {isProcessing ? 'Procesando...' : 'Confirmar pedido'}
                </button>

                {paymentStatus === 'success' && (
                  <div className="alert alert-success mt-3" role="alert">
                    ¡Pago realizado exitosamente! Gracias por tu compra.
                  </div>
                )}
                {paymentStatus === 'error' && (
                  <div className="alert alert-danger mt-3" role="alert">
                    No fue posible procesar el pago falso. Por favor intenta de nuevo.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              <h5>Resumen</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Subtotal:</span>
                <span>$ {subtotal.toLocaleString('es-CO')}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Envío:</span>
                <span>$ {shipping.toLocaleString('es-CO')}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2 fw-bold">
                <span>Total:</span>
                <span>$ {total.toLocaleString('es-CO')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;