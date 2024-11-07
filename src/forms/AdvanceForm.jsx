import React, { useState } from 'react';

const AdvancedForm = () => {
  const [formData, setFormData] = useState({
    gender: 'male',
    country: 'usa',
    hobbies: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        hobbies: checked
          ? [...prevData.hobbies, value]
          : prevData.hobbies.filter((hobby) => hobby !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Gender:</label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={handleInputChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={handleInputChange}
          />
          Female
        </label>
      </div>
      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={handleInputChange}
        >
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">UK</option>
        </select>
      </div>
      <div>
        <label>Hobbies:</label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="reading"
            checked={formData.hobbies.includes('reading')}
            onChange={handleInputChange}
          />
          Reading
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="traveling"
            checked={formData.hobbies.includes('traveling')}
            onChange={handleInputChange}
          />
          Traveling
        </label>
        <label>
          <input
            type="checkbox"
            name="hobbies"
            value="coding"
            checked={formData.hobbies.includes('coding')}
            onChange={handleInputChange}
          />
          Coding
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AdvancedForm;