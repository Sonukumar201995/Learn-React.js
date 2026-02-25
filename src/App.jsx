import { Suspense,use } from "react";


const fetchData=()=>fetch('https://dummyjson.com/users').then((response)=>response.json())
const userResourse=fetchData();

export default function App()
{
    return(
        <div>
            <h2>use Api in react js</h2>
           <Suspense fallback={<p>loading......</p>}>
            <User userResourse={userResourse}/>
           </Suspense>
        </div>
    )
}


const User=({userResourse})=>{
    const userData=use(userResourse)
    console.log(userData.users)
    return(
        <div>
            <h2>user list</h2>
           {
        userData.users.map((user) => (
            <h3 key={user.id}>{user.firstName}</h3>
        ))
        }
        </div>
    )
}