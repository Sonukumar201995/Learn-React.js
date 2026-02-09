import { Link } from "react-router"
export default function NavBar(){
    return <div>
        <div>
            <Link >Logo</Link>
        </div>
   <div>
    <ul>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <li><Link to='/contact'>Contact</Link></li>
        </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
    </ul>
   </div>
    </div>
}