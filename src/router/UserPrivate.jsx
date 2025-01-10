import {Fragment} from "react";
import {Navigate} from 'react-router-dom'
import PropTypes from "prop-types";

const UserPrivate = ({children}) => {
    let userID = sessionStorage.getItem("authuser");
    return <Fragment>{userID ? <>{children}</> : <Navigate to="/"/>}</Fragment>
}

// Add prop-types validation
UserPrivate.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is validated as a React node and required
};

export default UserPrivate;