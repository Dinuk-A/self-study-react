import React, { useState, useCallback, useEffect } from "react";

const Callback = () => {
    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(2);

    //useCallback memoizes this function, so it only changes when count or multiplier changes. This way, if the component re-renders for some unrelated reason (e.g., a parent component’s update), expensiveFunction won’t be recalculated unnecessarily. 
    

    //In a React component, when the component's state or props change, React re-renders the component.

    //During this re-render, any functions defined within that component are created anew. Even if the function logic remains the same, a new reference to that function is created.

    //By memoizing a function with useCallback, React ensures that the function reference remains the same across renders unless its dependencies change.

    const expensiveFunction = useCallback(() => {
        console.log("Running expensive calculation...");
        return count * multiplier;
    }, [count, multiplier]);

    useEffect(() => {
        console.log("Result of expensive calculation:", expensiveFunction());
    }, [expensiveFunction]);

    return (
        <div>
            <p>Count: {count}</p>
            <p>Multiplier: {multiplier}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <button onClick={() => setMultiplier(multiplier + 1)}>Increase Multiplier</button>
        </div>
    );
};

export default Callback;
