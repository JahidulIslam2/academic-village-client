import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import Root from "../root/Root";



export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
]);