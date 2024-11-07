import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Tablet" }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`} className="text-blue-500 hover:text-blue-700">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;