import { Link } from "react-router"
export default function NavBar(){
    return <div>
    <Link to="/"><h2>Home</h2></Link>
    <Link to="/contact"><h2>Contact</h2></Link>
    <Link to="/login"><h2>Login</h2></Link>
    </div>
}