import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext); // Use the context

    return (
        <button onClick={toggleTheme}>
            Toggle Theme
        </button>
    );
};

export default ThemeToggle;