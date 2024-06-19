import { FaAd, FaHome, FaList, FaMoneyBill, FaShoppingCart } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

// import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    

// const{ isAdmin} = useAdmin();

    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">

                <ul className="menu p-4">

                    {
                        isAdmin ? <>
                         <li className="mb-5">
                                    <NavLink to='/dashboard/adminHome'>
                                        <FaHome></FaHome>
                                        Admin Home </NavLink>
                                </li>

                                <li className="mb-5">
                                    <NavLink to='/dashboard/alluser'>
                                        <FaPerson></FaPerson>
                                        
                                        manage users </NavLink>
                                </li>
                                <li className="mb-5">
                                    <NavLink to='/dashboard/managecategory'>
                                        <FaList></FaList>
                                    
                                        manage category </NavLink>
                                </li>
                                <li className="mb-5">
                                    <NavLink to='/dashboard/paymenthistory'>
                                        <FaMoneyBill></FaMoneyBill>
                                        Payment Management </NavLink>
                                </li>
                                <li className="mb-5">
                                    <NavLink to='/dashboard/bannermanagement'>
                                        <FaAd></FaAd>
                                
                                        Banner advertise </NavLink>
                                </li>

                        </>

                            :

                            <>

                                <li className="mb-5">
                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart </NavLink>
                                </li>

                                <li className="mb-5">
                                    <NavLink to='/'>
                                        <FaMoneyBill></FaMoneyBill>
                                        Payment history </NavLink>
                                </li>

                            </>
                    }

                    {/* shared navlinks */}

                    <div className="divider">

                    </div>

                    <li className="mb-5">
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home </NavLink>
                    </li>


                </ul>
            </div>
            {/* dashboard content */}

            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;