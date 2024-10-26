import React, { useState, useMemo } from 'react';

function ExpensiveCalculationComponent() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(false);

    // A function that performs an expensive calculation based on `count`
    const calculateLargeSum = (num) => {
        console.log("Calculating large sum...");
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += num;
        }
        return sum;
    };

    // Memoize the result of the calculation, only re-compute when `count` changes
    const largeSum = useMemo(() => calculateLargeSum(count), [count]);

    return (
        <div>
            <h2>Expensive Calculation Example</h2>
            <p>Large Sum (memoized): {largeSum}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>

            {/* This state change won’t trigger recalculation of largeSum */}
            <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
            <p>Other State: {otherState ? "True" : "False"}</p>
        </div>
    );
}

export default ExpensiveCalculationComponent;
