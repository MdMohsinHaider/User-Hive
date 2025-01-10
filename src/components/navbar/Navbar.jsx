import { Link } from "react-router-dom";
import style from "./navbar.module.css";
import { Fragment } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

const Navbar = () => {


    let userID = sessionStorage.getItem("authuser");
    const adminID = sessionStorage.getItem("adminID");
    
    let navigate = useNavigate();

    let logout = ()=>{
        if (adminID){
            sessionStorage.removeItem("adminID");
            toast.success("Logout");
            navigate("/");
        } else{
            sessionStorage.removeItem("authuser");
            toast.success("Logout");
            navigate("/");
        }
    }

    return (
        <nav id={style.nav}>
            <figure>
                <img src="/hive.png" alt="logo" title="Hive"/>
            </figure>
            <ul>
                <li><Link to="/">Home</Link></li>
                {adminID || userID ? (
                    <Fragment>
                        <li className="secondary-btn" onClick={logout}>LogOut</li>
                    </Fragment>
                ) : (
                    <Fragment>
                        <li className="primary-btn"><Link to="/login">Login</Link></li>
                        <li className="secondary-btn"><Link to="/signup">Signup</Link></li>
                    </Fragment>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
