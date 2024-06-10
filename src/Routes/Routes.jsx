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
            path:'/modal',
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
        }
      ]
    },
  ]);