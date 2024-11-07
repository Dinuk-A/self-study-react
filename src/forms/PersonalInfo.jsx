import React, { useState } from 'react';

const PersonalInfo = ({ formData, onInputChange }) => {
  return (
    <div>
      <h2>Personal Information</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={onInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
};