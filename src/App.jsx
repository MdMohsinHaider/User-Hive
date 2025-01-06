import { myRoutes } from "./router/router"
import { RouterProvider } from "react-router-dom"


const App = () => {
    return <RouterProvider router={myRoutes}/>
}

export default App