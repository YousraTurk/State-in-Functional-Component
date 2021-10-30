import { useState } from "react";

const StateNum = (prop) => {
    const [num,setNum] = useState(100)
    return(
        <>
        <h1>The number is {num}</h1>
        <button onClick={()=>setNum(10)}>Click to Change the number</button>
        </>
    )
}
export default StateNum;