import { useEffect, useState } from "react";
import axios from "axios"
import { userMedia } from "../../backend/profiledata";
import styles from "./profile.module.css";
// import toast from 'react-hot-toast';

const Profile = () => {
    let userID = sessionStorage.getItem("authuser");
    console.log(userID);
    let [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        async function getLoggedInUser() {
            let { data } = await axios.get(`http://localhost:4040/users/${userID}`);
            console.log(data);
            setLoggedInUser(data);
        }
        getLoggedInUser();
    }, [userID]);

    return (
        <div id={styles.profilecontainer}>
            <header className="user-profile-header">
                <div className="user-details">
                    <h1>Welcome, {loggedInUser?.username} !</h1>
                    <p><strong>Email:</strong> {loggedInUser?.email}</p>
                    <p><strong>Phone:</strong> {loggedInUser?.phoneno}</p>
                    <p><strong>Gender:</strong> {loggedInUser?.gender}</p>
                    <p><strong>Date of Birth:</strong> {new Date(loggedInUser?.dob).toLocaleDateString()}</p>
                </div>

            </header>

            {/* this part addotinal fiexd data */}
            <section className={styles.postsContainer}>
                {userMedia.map((post) => (
                    <article key={post.id} className={styles.card}>
                        <img src={post.url} alt={post.description} className={styles.image} />
                        <div className={styles.content}>
                            <h3 className={styles.title}>{post.description}</h3>
                            <p className={styles.likes}>❤️ {post.likes} likes</p>
                            <ul className={styles.tags}>
                                {post.tags.map((tag, index) => (
                                    <li key={index} className={styles.tag}>
                                        #{tag}
                                    </li>
                                ))}
                            </ul>
                            <div className={styles.comments}>
                                <h4>Comments</h4>
                                {post.comments.map((comment, index) => (
                                    <p key={index}>
                                        <strong>User {comment.userId}:</strong> {comment.text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}

export default Profile