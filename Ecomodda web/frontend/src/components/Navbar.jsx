import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/productos?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={() => setIsOpen(false)}>
          Eccomoda Vintage
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/productos" onClick={() => setIsOpen(false)}>Todos los Productos</Link>
            </li>
          </ul>

          {/* Barra de búsqueda */}
          <form className="d-flex mx-3" onSubmit={handleSearch}>
            <div className="input-group">
              <input 
                type="search" 
                className="form-control form-control-sm" 
                placeholder="Buscar productos..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ minWidth: '200px' }}
              />
              <button className="btn btn-outline-primary btn-sm" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          <div className="d-flex align-items-center">
            {user ? (
              <div className="dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown">
                  {user.name}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile" onClick={() => setIsOpen(false)}>Mi Cuenta</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Cerrar Sesión</button></li>
                </ul>
              </div>
            ) : (
              <Link className="nav-link text-white" to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            )}
            
            <Link className="nav-link text-white" to="/carrito" onClick={() => setIsOpen(false)}>
              <i className="bi bi-cart"></i> 
              <span className="badge bg-primary ms-1">{getCartCount()}</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;