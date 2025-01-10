import {Fragment} from "react";
import {Navigate} from 'react-router-dom'
import PropTypes from "prop-types";

function AdminPrivate({children}) {
    const adminID = sessionStorage.getItem("adminID");
    return <Fragment>{adminID ? <>{children}</> : <Navigate to="/"/>}</Fragment>
}


// Add prop-types validation
AdminPrivate.propTypes = {
    children: PropTypes.node.isRequired, // Ensure children is validated as a React node and required
};
export default AdminPrivate