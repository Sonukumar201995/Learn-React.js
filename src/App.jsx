import { useState } from "react";

function App(){

  const [gender,Setgender]=useState('male')
  const [city,setCity]=useState('delhi')
  return(

    <div>
      {/* radio button */}
      <h1>handle Radion and Dropdown</h1>
      <h2>Select Gender :{gender}</h2>
      <input onChange={(event)=>Setgender(event.target.value)} type="radio" checked={gender=='male'} name="gender" value="male" id="male"/>
      <label htmlFor="male">Male</label>
      <input onChange={(event=>Setgender(event.target.value))} type="radio" checked={gender=='female'} name="gender" value="female" id="female"/>
      <label htmlFor="female">Female</label>
    
    <h4>Selected Gender :{gender}</h4>


    {/* dropdown   */}
    <h3>Select City :{city}</h3>
    <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>
    <option value="noida">Noida</option>
    <option value="delhi">Delhi</option>
    <option value="gurugaon">Gurugoan</option>
    </select>
    <h4>{city}</h4>
    </div>
  )
}
export default App;