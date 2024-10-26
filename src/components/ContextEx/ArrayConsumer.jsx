import { useContext } from "react";
import { ArrayContext } from "./ArrayContext";

const ArrayConsumer = () => {
    const copiedArray = useContext(ArrayContext);
    return (
        <>
            <p>{copiedArray.join(", ")}</p>

            <br />

            <ul>
                {copiedArray.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default ArrayConsumer;