import { useEffect, useState } from "react";
import styles from "./login.module.css";
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [registerUser, setRegisterUser] = useState(null);
    let navigate = useNavigate();

    useEffect(()=>{
        async function getSignupUser(){
            let {data} = await axios.get("http://localhost:4040/users");
            console.log(data);
            setRegisterUser(data); // storing the data in useState variable
        }
        getSignupUser();
    },[]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        let authUser = registerUser.find((user)=>{
            return user.email ===  formData.email && user.password === formData.password;
        })

        console.log(authUser);

        if (authUser?.email === "admin@gmail.com" && authUser?.password === "admin123"){
            toast.success("Succesful admin Login");

            // navigate profile
            navigate("/admin");

            // authuser id set in sessinStorage
            sessionStorage.setItem("adminID",authUser.id);            
        }
        else if (authUser){
            toast.success("Succesful Login");

            // navigate profile
            navigate("/profile");

            // authuser id set in sessinStorage
            sessionStorage.setItem("authuser",authUser.id);            
        }
        else{
            // popup not register
            toast.error("not register");

            // navigate signup page
            navigate("/signup");
        }
        
    };

    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login
