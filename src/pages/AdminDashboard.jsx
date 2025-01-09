import { useEffect, useState } from "react";
import axios from "axios";
import styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
    const adminID = sessionStorage.getItem("adminID");
    const [loggedInAdmin, setLoggedInAdmin] = useState(null);
    const [users, setUsers] = useState([]);  // Ensure users is always an array
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getLoggedInAdmin() {
            try {
                const { data } = await axios.get(`http://localhost:4040/users/${adminID}`);
                setLoggedInAdmin(data);
            } catch (err) {
                setError("Failed to fetch admin data");
                console.error(err);
            }
        }

        async function getAllUsers() {
            try {
                const { data } = await axios.get("http://localhost:4040/users");
                console.log("Users data:", data);  // Log the data to check the structure
                setUsers(data);  // Since the API is returning an array directly, we set it directly
            } catch (err) {
                setError("Failed to fetch users list");
                console.error(err);
            }
        }

        if (adminID) {
            getLoggedInAdmin();
            getAllUsers();
        } else {
            setError("Admin not logged in");
        }
    }, [adminID]);

    return (
        <div className={styles.dashboard}>
            <h1 className={styles.heading}>Admin Dashboard</h1>
            {error && <div className={styles.errorMessage}>{error}</div>}

            {loggedInAdmin ? (
                <div className={styles.adminInfo}>
                    <h2 className={styles.adminInfoTitle}>Welcome, {loggedInAdmin.username}</h2>
                    <p className={styles.adminInfoText}><strong>Email:</strong> {loggedInAdmin.email}</p>
                    <p className={styles.adminInfoText}><strong>Phone:</strong> {loggedInAdmin.phoneno}</p>
                    <p className={styles.adminInfoText}><strong>Gender:</strong> {loggedInAdmin.gender}</p>
                    <p className={styles.adminInfoText}><strong>Date of Birth:</strong> {loggedInAdmin.dob}</p>
                </div>
            ) : (
                <p>Loading admin data...</p>
            )}

            <h3>Users List</h3>
            {users.length === 0 ? (
                <p>No users available.</p>
            ) : (
                <table className={styles.usersTable}>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phoneno}</td>
                                <td>{user.gender}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminDashboard;
