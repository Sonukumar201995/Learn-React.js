function User({setUser}){
    return(
        <div>
            <input onChange={(event)=>setUser(event.target.value)}type="text" placeholder="User"/>
        </div>
    )
}
export default User;