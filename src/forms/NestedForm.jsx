import React, { useState } from 'react';

const NestedForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        state: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <PersonalInfo formData={formData} onInputChange={handleInputChange} />
            <AddressInfo formData={formData} onInputChange={handleInputChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default NestedForm;