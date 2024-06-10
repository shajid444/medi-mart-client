import { Link } from "react-router-dom";


const MenuItem = ({item}) => {
    console.log(item);
    // {name, image, price} = item;
    return (
        <div className="flex justify-between">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={item.image} alt="" />
            <div className="flex justify-evenly gap-5 items-center"> 
                <h3 className="uppercase">Name : {item.name}</h3>
       
            <p className="text-yellow-500">
                ${item.price_per_unit}
            </p>
          
            <button className="btn btn-success">Select</button>

            <Link to={`/modal/${item}`} className="btn btn-outline btn-info">Info</Link>
            </div>
        </div>
    );
};

export default MenuItem;