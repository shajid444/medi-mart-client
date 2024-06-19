import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import { Helmet } from 'react-helmet-async';


const Main = () => {
    const location = useLocation();
    // console.log(location);

   
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