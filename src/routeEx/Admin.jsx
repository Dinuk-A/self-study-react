import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      {/* Navigation menu for the admin section */}
      <nav className="mb-4">
        <ul className="flex gap-4">
          <li><Link to="/admin/users" className="text-blue-500 hover:text-blue-700">Users</Link></li>
          <li><Link to="/admin/settings" className="text-blue-500 hover:text-blue-700">Settings</Link></li>
        </ul>
      </nav>

      {/* Nested routes for the admin section */}
      <Routes>
        <Route path="users" element={<h2>Users Management</h2>} />
        <Route path="settings" element={<h2>Admin Settings</h2>} />
      </Routes>
    </div>
  );
};

export default Admin;