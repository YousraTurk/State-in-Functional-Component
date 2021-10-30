import { useState } from "react";

const StateStr = (prop) => {
    const [lastname,setLastname] = useState("Arif")
    return(
        <>
        <h1>My name is :  {prop.name}  <br/> last name is : {lastname} </h1> 
        <button onClick={()=>setLastname("Turk")}>Click to Change the last Name</button>
        </>
    )
}
export default StateStr;