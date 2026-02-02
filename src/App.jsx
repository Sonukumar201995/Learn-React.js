

import { useState } from "react";
import Display from "./Display";
import User from "./User";
function App(){
  const [user,setUser]=useState('')
  return(
    <div>
      <h2>lifting state up</h2>
      <User setUser={setUser}/>
     <hr />
     <Display user={user}/>
    </div>
  )
}
export default App;