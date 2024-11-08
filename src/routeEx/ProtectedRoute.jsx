import React from 'react';
import { Navigate } from 'react-router-dom';

// special children prop=== represent and replace anything(any comp) that comes between this components tags
const ProtectedRoute = ({ children }) => {

  //to simulate the authentication process, not reccomended for real apps💥 ...instead use isAuthenticated as a prop✅(ex below)
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;


/** ✅
 * const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};
 */


//in app>>>
/**
 * const isAuthenticated = false;
 * 
 * <Route
  path="/dashboard"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <Dashboard />
    </ProtectedRoute>
  }
/>
 */
