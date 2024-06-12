import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Modal from "../Pages/Shared/Modal/Modal";
import SpecificCatagory from "../Pages/Shared/SpecificCatagory/SpecificCatagory";
import SpcCapsule from "../Pages/Shared/SpecificCatagory/SpcCapsule";
import SpcSyrup from "../Pages/Shared/SpecificCatagory/SpcSyrup";
import SpcInjection from "../Pages/Shared/SpecificCatagory/SpcInjection";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

  

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/modal/:item',
            element:<Modal></Modal>
        },
        {
            path:'/spc',
            element:<SpecificCatagory></SpecificCatagory>
        },
        {
            path:'/capsule',
            element:<SpcCapsule></SpcCapsule>
        },
        {
            path:'/syrup',
            element:<SpcSyrup></SpcSyrup>
        },
        {
            path:'/injection',
            element:<SpcInjection></SpcInjection>
        },
        {
            path:'/shop',
            element:<PrivateRoute>
                <Shop></Shop>
            </PrivateRoute>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        }
      ]
    },

    {
        path :'dashboard',
        element: <Dashboard></Dashboard>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            }
        ]
    }
  ]);