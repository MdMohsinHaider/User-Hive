import style from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav id={style.nav}>
            <figure>
                <img src="/hive.png" alt="logo" title="Hive"/>
            </figure>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Login</a></li>
                <li><a href="">Signup</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
