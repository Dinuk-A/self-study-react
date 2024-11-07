import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return <h1 className="text-2xl font-bold">Product Details for ID: {id}</h1>;
};

export default ProductDetail;