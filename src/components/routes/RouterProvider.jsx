import { createBrowserRouter } from "react-router-dom";
import Courses from "../page/courses/Courses";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import MainContent from "../page/mainContent/MainContent";
import ContentCard from "../page/mainContentCard/ContentCard";
import SignUp from "../page/signUp/SignUp";
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
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('http://localhost:5000/courses-name')
            },
            // {
            //     path:'/course/:id',
            //     element:,
            //     loader: ()=> fetch(`http://localhost:5000/course/id`)
            // }

        ]
    }
]);