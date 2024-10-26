import { useRef } from "react";
import Child from "./Child";

//to access and manipulate child values,fns,states from a parent component
const ImpHand=()=>{
    const childRef = useRef(null);

    return(
        <div>
            <button onClick={()=>{childRef.current.toggleFn()}}>Parent Button</button>
            <Child ref={childRef}/>
        </div>
    )
}

export default ImpHand;