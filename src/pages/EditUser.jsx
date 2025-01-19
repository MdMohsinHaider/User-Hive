import axios from "axios"
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"
import styles from "./EditUser.module.css"



const EditUser = () => {

    let {id} = useParams();
    console.log(id);
    
    let [editEmp,setEditEmp] = useState({});
    let navigate = useNavigate();

    useEffect(()=>{
        async function getEditUser() {
            let {data} = await axios.get(`http://localhost:4040/users/${id}`);
            console.log(data);
            setEditEmp(data);
        }
        getEditUser();
    },[]);


    let handleChange = (e)=>{
        let {name, value} = e.target;
        setEditEmp({...editEmp,[name]:value});
    }

    let formSubmit =async (e)=>{
        e.preventDefault();
        console.log(editEmp);
        
        try {
            let resp = await axios.put(`http://localhost:4040/users/${id}`,editEmp);
            console.log(resp);
            toast.success("user Updated");
            navigate("/admin");
        } catch (error) {
            toast.error("Something error");
            console.log(error);
            
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Edit User</h1>
            <form onSubmit={formSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={editEmp.username || ''}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={editEmp.email || ''}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={editEmp.password || ''}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        type="tel"
                        name="phoneno"
                        value={editEmp.phoneno || ''}
                        onChange={handleChange}
                        className={styles.input}
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="submit" className={styles.button}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditUser