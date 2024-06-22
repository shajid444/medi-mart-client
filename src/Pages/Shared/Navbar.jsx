import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
// import { FaShoppingCart } from 'react-icons/fa';
// import useCart from "../../hooks/useCart";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // const [cart] = useCart();
  // console.log(user.displayName);

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  const navLinks = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/shop">Shop</NavLink></li>
    <li><NavLink to="/dashboard/cart">
      <FaCartShopping></FaCartShopping>
      Cart</NavLink></li>

  





  </>

  return (
    <div className="navbar shadow-lg rounded-lg mb-8 bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 rounded-box w-52 ">
            {navLinks}
          </ul>
        </div>
        <div className=" flex justify-center items-center ">
          <h1 className="text-primary text-2xl font-bold">Medi Mart</h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex ml-40">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end z-50 ">
        {
          user ? <div className="dropdown dropdown-end " >
            <label tabIndex={0} className="btn  btn-ghost btn-circle avatar" >
              <div className=" w-10 rounded-full flex items-center ">
                <img alt="Tailwind CSS Navbar component" src={user?.
                  photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <button className="btn btn-sm btn-ghost">{user.displayName || 'name not found'}</button>
              </li>
              <li>
                <Link to='/' className="btn btn-sm btn-ghost"> Update Profile </Link>
              </li>
              <li>
                <Link to="/dashboard/cart" className="btn btn-sm btn-ghost">Dash Board </Link>
              </li>
              <li>
                <button onClick={handleLogOut}>Log Out</button>
              </li>

            </ul>


          </div>


            :
            <Link to='/login'>
              <button className="btn">Login</button>
            </Link>


        }



      </div>
    </div>
  );
};

export default Navbar;