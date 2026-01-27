import { useTransition } from "react";

function App()
{

  const [pending,startTransition]=useTransition();
  const handleButton=()=>{
    startTransition(async()=>{
      await new Promise (res=>setTimeout(res,2000));
    })
  }
  return(
    <div>
      <h2>useTransition Hook</h2>
      <button disabled ={pending} onClick={handleButton}>Click</button>
    </div>
  )
}

export default App;