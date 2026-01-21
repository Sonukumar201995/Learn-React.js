import { useState } from "react";

function App(){
  const[name,setName]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");
  return (

    <>
    <h2>Controlled component</h2>
    
      <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter Name"/><br /><br />
      <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter password"/><br /><br />
      <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="email"/><br /><br />
      <button onClick={()=>{setName("");setPassword("");setEmail("");}}>clear</button><br /><br />
      <button >Sumit</button>
    <h2>{name}</h2>
    <h2>{password}</h2>
    <h2>{email}</h2>
    </>
  )
}

export default App;