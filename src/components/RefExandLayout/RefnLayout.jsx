//ref === to access and manipulate DOM elements real time(focusing on inputs,etc)

//layout === similar to useEffect but , calls before useEffect at every refresh/rerender

import { useEffect, useLayoutEffect, useRef } from "react";

const RefnLayout = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("useEffect log");        
    })

    //implementing after the effect
    //but still this will run before effect
    useLayoutEffect(()=>{
        console.log("useLayoutEffect log");
    })

    //ref ex
    const showValue = () => {
        console.log(inputRef.current.value);
    }

    //ref ex
    return (
        <div>

            <input type="text" ref={inputRef} />
            <button onClick={showValue}>Show </button>

        </div>
    )
}

export default RefnLayout;