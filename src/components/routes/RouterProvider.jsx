import { createBrowserRouter } from "react-router-dom";
import Blog from "../page/blog/Blog";
import Checkout from "../page/checkOutpage/Checkout";
import CourseDetails from "../page/courseDetails/CourseDetails";
import Courses from "../page/courses/Courses";
import Error from "../page/errorPage/Error";
import Home from "../page/home/Home";
import Login from "../page/login/Login";
import SignUp from "../page/signUp/SignUp";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Root from "../root/Root";



export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                errorElement:<Error/>
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
                loader:()=>fetch('https://academic-hub-server.vercel.app/courses-name')
            },
            {
                path:'/course/:id',
                element:<CourseDetails></CourseDetails>,
                loader: ({params})=> fetch(`https://academic-hub-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout/></PrivateRoute>,
                loader: ({params})=> fetch(`https://academic-hub-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/blog',
                element:<Blog></Blog>
                
            }

        ]
    }
]);