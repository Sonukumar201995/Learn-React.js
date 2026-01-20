import { useState } from "react"

function Count()
{
    const [count,setCount]=useState(0);
    const handleCount=()=>{
        setCount(count+1);
    }
    return(
        <div>
        <h1>Counter :{count}</h1>
        <button onClick={handleCount}>Change</button>
        </div>
    )
}

export default Count;