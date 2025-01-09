import { useState } from 'react';
import styles from './Signup.module.css';
import axios from "axios"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phoneno: '',
        gender: '',
        dob: '',
        agree: false,
    });

    let navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        if (formData.agree) {
            axios.post("http://localhost:4040/users", formData).then(() => {
                console.log("data sent Succesfuly");
                toast.success('Successfully Register User');
            }).catch((err) => {
                console.log(err);
                toast.error("This didn't work.");
            })
        }
        else {
            toast.error("plese accept the agreement");
        }


        setFormData({
            username: '',
            email: '',
            password: '',
            phoneno: '',
            gender: '',
            dob: '',
            agree: false,
        });

        navigate("/login");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Signup</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="username" className={styles.label}>Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        className={styles.input}
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        className={styles.input}
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="password" className={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        className={styles.input}
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phoneno" className={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        id="phoneno"
                        name="phoneno"
                        placeholder="Enter phone number"
                        className={styles.input}
                        value={formData.phoneno}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="gender" className={styles.label}>Gender</label>
                    <div className={styles.radioGroup}>
                        <label htmlFor="male" className={styles.radioLabel}>Male</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            className={styles.radioInput}
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                        />
                        <label htmlFor="female" className={styles.radioLabel}>Female</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className={styles.radioInput}
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="dob" className={styles.label}>Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        className={styles.input}
                        value={formData.dob}
                        onChange={handleChange}
                    />
                </div>

                <div className={styles.checkboxGroup}>
                    <input
                        type="checkbox"
                        id="agree"
                        name="agree"
                        className={styles.checkbox}
                        checked={formData.agree}
                        onChange={handleChange}
                    />
                    <span>Agree & Continue</span>
                </div>

                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.button}>Signup</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
