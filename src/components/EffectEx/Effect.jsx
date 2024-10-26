import { useEffect, useState } from "react";

//use effect will run every time a page loads/component re renders
const Effect = () => {
    const [count, setCount] = useState(0);
    const [welcomeMsg, setwelcomeMsg] = useState("Hello User");

    //this runs in every rerender
    useEffect(() => {
        setwelcomeMsg(`Hello User, You Visited This page @ ${new Date().getHours()} :${new Date().getMinutes()} `);

    }, [])

    //this runs only when the given state changes
    useEffect(() => {
        document.title = `Count : ${count} `;
    }, [count])

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{welcomeMsg}</p>
            <br />
            <h1>{count}</h1>


            <button onClick={increment}>Add Only</button>

        </div>
    )




}

export default Effect;