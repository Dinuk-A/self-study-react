import { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    const toggleFn = () => {
        setToggle(prevToggle => !prevToggle);
    };

    useImperativeHandle(ref, () => ({
        toggleFn,  
    }));

    return (
        <div>
            
            <button onClick={toggleFn}>Child Button</button>
            {toggle && <h1>Toggling Text</h1>}
        </div>
    );
});

export default Child;

//if toggle fn is defined inside the imparativrhandle it has to be used with  ref.current.toggleFn() in child button


/*
import { forwardRef, useImperativeHandle, useState } from "react";

const Child = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        toggleFn() {
            setToggle(prevToggle => !prevToggle);
        },
    }));

    return (
        <div>
           
            <button onClick={() => ref.current.toggleFn()}>Child Button</button>
            {toggle && <h1>Toggling Text</h1>}
        </div>
    );
});

export default Child;
 */
