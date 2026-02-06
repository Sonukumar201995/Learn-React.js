import Collage from "./Collage";
import { Subjectcontext } from "./Context";

function App(){
  return(
  
      <div style={{backgroundColor:'yellow', padding:10}}>
        <Subjectcontext.Provider value="English">
          <h1>Context Api</h1>
          <Collage/>
        </Subjectcontext.Provider>
      </div>
  
  )
}

export default App;
