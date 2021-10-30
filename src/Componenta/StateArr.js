import { useState } from "react";

const StateArr = (prop) => {
    // const [num,setNum] = useState([])
    return (
        <>
            <h1>SISTERS : <br /> {prop.Array.map((item) =>
                <>
                    <li>
                        {item}
                    </li>
                </>
            )} </h1>
        </>
    )
}
export default StateArr;