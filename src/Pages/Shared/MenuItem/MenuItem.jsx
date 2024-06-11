import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
// import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import axios from "axios";
import useCart from "../../../hooks/useCart";


const MenuItem = ({ item }) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxiosSecure();

    const [cart, refetch] = useCart();
    console.log(cart);


    const handleAddToCart = () => {


        // console.log(medicine, user.email);
        if (user && user.email) {
            // todo
            const cartItem = {
                menuId : item._id,
                email : user.email,
                name : item.name,
                image : item.image,
                price : item.price_per_unit
            }

            axiosSecure.post('/cart', cartItem)
            .then(res =>{
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "added to your cart",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    //   refetch cart to update the cart items count

                    refetch();



                }
            })
        }

        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state : {from : location}})
                }
            });
        }
    }
    // console.log(item);
    // {name, image, price} = item;
    return (
        <div className="flex justify-between">
            <img style={{ borderRadius: '0 200px 200px 200px' }} className="w-[100px]" src={item.image} alt="" />
            <div className="flex justify-evenly gap-5 items-center">
                <h3 className="uppercase">Name : {item.name}</h3>

                <p className="text-yellow-500">
                    ${item.price_per_unit}
                </p>

                <button onClick={handleAddToCart} className="btn btn-success">Select</button>

                <Link to={`/modal/${item}`} className="btn btn-outline btn-info">Info</Link>
            </div>
        </div>
    );
};

export default MenuItem;