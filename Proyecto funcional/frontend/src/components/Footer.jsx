import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <h5>Eccomoda Vintage</h5>
            <p>Tu tienda de ropa vintage de segunda mano. Encuentra prendas únicas con estilo y historia.</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-white"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-white"><i className="bi bi-tiktok"></i></a>
            </div>
          </div>
          
          <div className="col-md-2 mb-4">
            <h5>Comprar</h5>
            <ul className="list-unstyled">
              <li><Link to="/productos?cat=hombre" className="text-secondary">Hombre</Link></li>
              <li><Link to="/productos?cat=mujer" className="text-secondary">Mujer</Link></li>
              <li><Link to="/productos?cat=accesorios" className="text-secondary">Accesorios</Link></li>
            </ul>
          </div>
          
          <div className="col-md-2 mb-4">
            <h5>Información</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-secondary">Sostenibilidad</a></li>
              <li><a href="#" className="text-secondary">Sobre nosotros</a></li>
              <li><a href="#" className="text-secondary">Blog</a></li>
              <li><a href="#" className="text-secondary">Contacto</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-4">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li className="text-secondary">📍 Bogotá, Colombia</li>
              <li className="text-secondary">📧 contacto@eccomoda.com</li>
              <li className="text-secondary">📞 +57 313 595 2021</li>
            </ul>
          </div>
        </div>
        
        <hr className="border-secondary" />
        <div className="text-center">
          <p className="mb-0">© 2025 Eccomoda Vintage — Moda vintage de segunda mano</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;