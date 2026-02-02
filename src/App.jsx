

import User from "../User";
import Display from "../Display";
import { useState } from "react";
function App(){

  const[user,setUser]=useState('')
  return(
    <div>
      <h2>Lifting state in React</h2>
      <User setUser={setUser}/>
      <hr />
      <Display user={user}/>
    </div>
    
  )
}

export default App;