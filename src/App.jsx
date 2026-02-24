import { lazy, Suspense, useState } from "react"
// import User from "./User"

const User= lazy(()=>import('./User'))
export default function App()
{
    const [load,setLoad]=useState(false)
    return(
        <div>
            <h2>Lazy Loading</h2>
           {
            load? <Suspense fallback={<h3>loading.....</h3>}> <User/> </Suspense>:null
           }
            <button onClick={()=>setLoad(true)}>Load User</button>
        </div>
    )
}