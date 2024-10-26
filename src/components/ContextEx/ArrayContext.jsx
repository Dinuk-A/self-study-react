import { createContext } from "react";

export const ArrayContext = createContext();

export const ArrayProvider = ({ children }) => {
    let originalArray = ["cat", null, "bat", 123, true, "rat", 0.5125];

    return (
        //not passing an object like theme example, just a plain array itself
        <ArrayContext.Provider value={originalArray}>
            {children}
        </ArrayContext.Provider>
    )
}

//APP JS >>>
/*import './App.css';
import { ArrayProvider } from './components/ContextEx/ArrayContext';
import ArrayConsumer from './components/ContextEx/ArrayConsumer';


function App() {
  return (
    <ArrayProvider>
      <div>
        <ArrayConsumer></ArrayConsumer>
      </div>
    </ArrayProvider>
  );
}

export default App;
 */

