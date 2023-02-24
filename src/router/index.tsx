import Home from "@/views/Home/Home"
import About from "@/views/About/About"
import {Navigate} from "react-router-dom"
const routes = [
    // {
    //     path:"/",
    //     element: <Navigate to="/home"></Navigate>
    // },
    {
        path:"/home",
        element: Home
    },
    {
        path:"/about",
        element: About
    }
]
export default routes