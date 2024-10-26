// a replacement for useState
//same as state , rerender in every value change but ....
//use this if trying to change more than 1 state at once in a single fn
import { useReducer } from "react";

let darkThemeText = "This is the Dark theme";
let lightThemeText = "This is the light theme";

//manage what happens when a state changes
const reducerFn = (combinedState, action) => {

    switch (action.type) {
        case "INC":
            return {
                ...combinedState,
                count: combinedState.count + 1,
            };
        case "TOGGLE":
            const newTheme = !combinedState.darkTheme;
            return {
                count: combinedState.count + 1,
                darkTheme: newTheme,
                text: newTheme ? darkThemeText : lightThemeText
            };
        default:
            return combinedState;
    }
    
};


const ReducerAdvance = () => {

    // combinedState === var to store all states in one place(name)
    // dispatchFn === a function used to change the values of these states 
    //reducerFn === manage what happens when a state changes
    // initial values for all the states in combinedState
    const [combinedState, dispatchFn] = useReducer(reducerFn, { count: 0, darkTheme: true, text: darkThemeText });

    const themeStyles = {
        backgroundColor: combinedState.darkTheme ? "#333" : "#fff",
        color: combinedState.darkTheme ? "#fff" : "#000",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center"
    };

    return (
        <div style={themeStyles}>
            <h2>{combinedState.text}</h2>
            <h1>{combinedState.count}</h1>
            <button onClick={() => { dispatchFn({ type: "INC" }) }}> Increment Only  </button>
            <hr />
            <button onClick={() => { dispatchFn({ type: "TOGGLE" }) }}>Toggle All</button>
        </div>
    )
}

export default ReducerAdvance;