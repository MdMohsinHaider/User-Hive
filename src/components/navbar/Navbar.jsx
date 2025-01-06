import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav id={style.nav}>
            <figure>
                <img src="/hive.png" alt="logo" title="Hive"/>
            </figure>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li className="primary-btn"><Link to="/login">Login</Link></li>
                <li className="secondary-btn"><Link to="/signup">Signup</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
