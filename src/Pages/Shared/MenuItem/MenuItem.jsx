import { Link } from "react-router-dom";


const MenuItem = () => {
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src="https://i.ibb.co/1Jy578H/mika-baumeister-Mtu3-Rd1-OBI-unsplash.jpg" alt="" />
            <div>
                <h3 className="uppercase">Name</h3>
            </div>
            <p className="text-yellow-500">
                price
            </p>
            <button className="btn btn-success">Select</button>

            <Link to='/modal' className="btn btn-outline btn-info">Info</Link>
            
        </div>
    );
};

export default MenuItem;