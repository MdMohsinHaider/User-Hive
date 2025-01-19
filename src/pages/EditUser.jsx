import axios from "axios"
import { useEffect, useState, } from "react";
import { useParams } from "react-router-dom"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom"



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
        <div>
            <center>
            <h1>EditUser</h1>
            <form onSubmit={formSubmit} >
                <label>Username</label>
                <input type="text" name="username" onChange={handleChange} value={editEmp.username}/>
                <br /><br />

                <label>Email</label>
                <input type="email" name="email" onChange={handleChange} value={editEmp.email}/>
                <br /><br />

                <label>Password</label>
                <input type="password"name="password" onChange={handleChange} value={editEmp.password}/>
                <br /><br />

                <label>Phone number</label>
                <input type="tel" name="phoneno" onChange={handleChange} value={editEmp.phoneno}/>
                <br /><br />

                <button type="submit" >Submit</button>

            </form>
            </center>
        </div>
    )
}

export default EditUser