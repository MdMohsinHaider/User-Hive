import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Profile from "../pages/Profile";
import AdminDashboard from "../pages/AdminDashboard";
import UserPrivate from "./UserPrivate";
import AdminPrivate from "./AdminPrivate";



export let myRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"/login",
                element:<Login />,
            },
            {
                path:"/signup",
                element:<Signup/>,
            },
            {
                path:"/profile",
                element:(
                    <UserPrivate>
                        <Profile/> {/* Protected Route */}
                    </UserPrivate>
                ),
            },
            {
                path:"/admin",
                element:(
                    <AdminPrivate>
                        <AdminDashboard/>
                    </AdminPrivate>
                ),
            }
        ]
    }
]);