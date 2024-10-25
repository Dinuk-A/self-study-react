import { useState } from "react";

//state === values + uis + every thing in a component/page
//every time a value in state changes , react will re render the component

const State = () => {

    // initial value is 69 >>> start with 69
    const [count, setCount] = useState(69);

    //another state hook to use with inputs
    const [inputVal, setInputVal] = useState("Dinuka");

    //to support increment
    function addOne() {
        setCount(count + 1);
    }

    //for 2nd ex >>> real time update the typing text
    function handleInputChange(e){
        setInputVal(e.target.value)
    }

    return (
        <>
            {/* ex 1 */}
            <h1>{count}</h1>
            <button onClick={addOne}> Increment + </button>
            <hr />

            {/* ex 2 */}
            <input type="text" placeholder="Enter Name" onChange={handleInputChange} />
            <p>{inputVal}</p>
        </>
    )

}

export default State;