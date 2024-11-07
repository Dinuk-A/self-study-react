import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="p-4">
      {/* Navigation menu */}
      <nav className="mb-4">
        <ul className="flex gap-4">
          <li><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
          <li><Link to="/products" className="text-blue-500 hover:text-blue-700">Products</Link></li>
          <li><Link to="/profile" className="text-blue-500 hover:text-blue-700">Profile</Link></li>
          <li><Link to="/admin" className="text-blue-500 hover:text-blue-700">Admin</Link></li>
        </ul>
      </nav>

      {/* Content area */}
      {children}
    </div>
  );
};

export default Layout;