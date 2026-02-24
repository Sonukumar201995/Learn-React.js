import { useReducer } from "react"

    const emptyData={
        name:'',
        password:'',
        email:'',
        city:'',
        address:''
    }

    const reducer=(data,action)=>{
        return {...data,[action.type]:action.val}
    }

export default function App(){

    const[state,dispatch]=useReducer(reducer,emptyData)
    console.log(state);
    return(
        <div>
            <h2>use useReducer</h2>

            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'name'})} placeholder="Enter Your Name"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'password'})} placeholder="Enter Your Password"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'email'})} placeholder="Enter Email"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'city'})} placeholder="Enter City"/>
            <br /><br />
            <input type="text" onChange={(event)=>dispatch({val:event.target.value,type:'address'})} placeholder="Enter Address"/>
            <br /><br />
            <ul>
                <li>Name:{state.name}</li>
                <li>Password:{state.password}</li>
                <li>Email:{state.email}</li>
                <li>City:{state.city}</li>
                <li>Address:{state.address}</li>
            </ul>
            <button>Add Details</button>
            
        </div>
    )
}