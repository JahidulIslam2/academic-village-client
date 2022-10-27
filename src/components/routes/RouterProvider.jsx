import { createBrowserRouter } from "react-router-dom";
import Checkout from "../page/checkOutpage/Checkout";
import CourseDetails from "../page/courseDetails/CourseDetails";
import Courses from "../page/courses/Courses";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import MainContent from "../page/mainContent/MainContent";
import ContentCard from "../page/mainContentCard/ContentCard";
import SignUp from "../page/signUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
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
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout/></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
            }

        ]
    }
]);