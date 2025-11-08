import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className="mb-4">
      <ol className="breadcrumb bg-dark p-3 rounded">
        <li className="breadcrumb-item">
          <Link to="/" className="text-decoration-none text-primary">
            <i className="bi bi-house-door-fill me-1"></i>
            Inicio
          </Link>
        </li>
        {items.map((item, index) => (
          <li 
            key={index} 
            className={`breadcrumb-item ${index === items.length - 1 ? 'active text-white' : ''}`}
            aria-current={index === items.length - 1 ? 'page' : undefined}
          >
            {index === items.length - 1 ? (
              item.label
            ) : (
              <Link to={item.path} className="text-decoration-none text-primary">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;