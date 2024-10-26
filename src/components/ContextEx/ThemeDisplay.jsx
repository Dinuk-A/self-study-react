import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeDisplay = () => {
    const { theme } = useContext(ThemeContext); // Use the context

    return (
        <h2>
            Current Theme: {theme}
        </h2>
    );
};

export default ThemeDisplay;