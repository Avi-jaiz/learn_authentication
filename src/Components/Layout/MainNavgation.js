import { Link } from "react-router-dom";
import '../Layout/mainNavigation.css';
import { useContext } from "react";
import AuthContext from "../../Store/auth-context";


const MainNavigation =()=>
{
 
const authContext =   useContext(AuthContext);

const isLogged = authContext.isLogged;
const logOutHandler =()=>
{
    authContext.logout();
}




    return(
<header>
    <div>
    <Link to='/' className="link">
<h2>Auth with React</h2>
</Link>
    </div>

<nav>
    <ul>
       {!isLogged&& <li>
            <Link to='/auth' className="link">Login</Link>
        </li>}

        {isLogged && <li>
        <Link to='/profile' className="link">
            Profile
        </Link>
         
        
        </li>}
        
       {isLogged&& <button className="button" onClick={logOutHandler}>Log Out</button>}
    </ul>
</nav>
</header>
    )
}

export default MainNavigation;