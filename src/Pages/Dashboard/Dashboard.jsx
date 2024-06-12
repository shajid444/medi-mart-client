import { FaHome, FaMoneyBill, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-64 min-h-screen bg-orange-400">

              <ul className="menu p-4">
                 <li className="mb-5">
                    <NavLink to ='/dashboard/cart'>
                        <FaShoppingCart></FaShoppingCart>
                         My Cart </NavLink>
                    </li>

                    <li className="mb-5">
                    <NavLink to ='/dashboard/cart'>
                          <FaMoneyBill></FaMoneyBill>
                         Payment history </NavLink>
                    </li>

                    <div className="divider">

                    </div>
                    
                    <li className="mb-5">
                    <NavLink to ='/'>
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