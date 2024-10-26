import './App.css';
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
