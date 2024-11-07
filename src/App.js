import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './Layout';
import Layout from './routeEx/LayoutNav';
import Home from './routeEx/Home';
import Products from './routeEx/Products';
import ProductDetail from './routeEx/ProductDetail';
import ProtectedRoute from './routeEx/ProtectedRoute';
import Login from './routeEx/Login';
import Profile from './routeEx/Profile';
import Admin from './routeEx/Admin';


const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="*" element={<h1>404 - Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;