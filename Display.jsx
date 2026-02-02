import { useTransition } from "react";
import { useFormState } from "react-dom";

function Display({user}){
    return(
        <div>
            {user}
        </div>
    )
}
export default Display;