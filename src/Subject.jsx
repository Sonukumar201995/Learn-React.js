import { useContext } from "react";
import { Subjectcontext } from "./Context";

function Subject(){
  const subject = useContext(Subjectcontext);

  return(
    <div style={{backgroundColor:'pink', padding:10}}>
      <h2>Subject component</h2>
      <h3>Subject is: {subject}</h3>
    </div>
  )
}

export default Subject;
