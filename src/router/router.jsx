import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"



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
            }
        ]
    }
]);