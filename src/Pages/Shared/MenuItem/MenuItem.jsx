import { Link } from "react-router-dom";


const MenuItem = ({item}) => {
    console.log(item);
    // {name, image, price} = item;
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={item.image} alt="" />
            <div>
                <h3 className="uppercase">Name : {item.name}</h3>
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