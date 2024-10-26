import { useState } from "react";
import { createContext } from "react";

// Create the context
export const ThemeContext = createContext();

// Create the provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    //provides an object with two properties to children 
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

//app js should look like this>>>

/*import './App.css';
import { ThemeProvider } from './components/ContextEx/ThemeContext';
import ThemeDisplay from './components/ContextEx/ThemeDisplay';
import ThemeToggle from './components/ContextEx/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div >
        <div style={{ padding: '20px' }}>
          <ThemeDisplay />
          <ThemeToggle />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
 */

