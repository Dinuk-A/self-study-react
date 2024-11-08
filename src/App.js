import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

      {/* everything is inside Layout === every component will include the layouts navbar and styles(paddings)  */}
      <Layout>

        <Routes>
          {/* client side redirecting */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          {/* normal routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />

          {/* use params */}
          <Route path="/products/:id" element={<ProductDetail />} />          

          {/* differernt>> admin and others followed by admin */}
          <Route path="/admin/*" element={<Admin />} />

          {/* routes based on conditions */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />   {/* this is the child */}
              </ProtectedRoute>
            }
          />

          {/* route if the given url didnt match any thing */}
          <Route path="*" element={<h1>404 - Not Found</h1>} />


        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;