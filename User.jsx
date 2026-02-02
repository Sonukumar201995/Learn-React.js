function User({setUser}){
    return(
        <div>
            <input onChange={(event)=>setUser(event.target.value)}type="text" placeholder="Enter Name"/>
        </div>
    )
}
export default User;