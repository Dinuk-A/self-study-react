import { useReducer } from "react";

const Reducer = () => {

    const reducerFn = (combinedState, action) => {
        switch (action.type) {
            case "INC ONLY":
                return { count: combinedState.count + 1, showText: combinedState.showText };
            case "TOGGLE TEXT":
                return { count: combinedState.count, showText: !combinedState.showText };
            case "BOTH":
                return { count: combinedState.count + 1 ,showText: !combinedState.showText };
            default:
                return { combinedState }
        }

    }


    const [combinedState, dispatchFn] = useReducer(reducerFn, { count: 0, showText: true });

    return (
        <>
            <div>
                <h1>{combinedState.count}</h1>
                <button onClick={() => { dispatchFn({ type: "INC ONLY" }) }}>Increment</button>
                <br />
                <p style={{ color: "white" }}>{combinedState.showText && "TEXT IS VISIBLE, NOT INCREMENTING"}</p>
                <button onClick={() => { dispatchFn({ type: "TOGGLE TEXT" }) }}>TOGGLE TEXT</button>
                <button onClick={() => { dispatchFn({ type: "BOTH" }) }}>BOTH</button>
                <br />

            </div>
        </>
    )

}

export default Reducer;