import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { Helmet } from 'react-helmet-async';


const Main = () => {
    return (
        <div>
            <Helmet>
        <title>Main page</title>
  
      </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
        
    );
};

export default Main;