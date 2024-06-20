import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Cart = () => {
    const [cart, refetch] = useCart();

    const axiosSecure = useAxiosPublic();



    const { user } = useAuth();

    const ownData = cart.filter(item => item.email === user.email);

    const totalPrice = ownData.reduce((total, item) => {
        const price = parseFloat(item.price);
        return total + price;
      }, 0);

   
    console.log(totalPrice);


    const handleDelete = id => {




        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {



                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        if (res.data.deleteCount > 0) {

                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your item has been deleted.",
                                icon: "success"
                            });

                        }
                    })


            }
        });
    }

    return (
        <div>

            <h2 className="text-6xl text-center mb-10"> Total Price ${totalPrice}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> </th>

                            <th>Name</th>
                            <th>company</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ownData.map(item =>
                                <tr key={item._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>company</td>
                                    <td>${item.price}</td>

                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>


                </table>
            </div>
            <div className="flex justify-end space-x-4 p-5">
                <Link to ='/shop' type="button" className="px-6 py-2 border rounded-md dark:border-violet-600">Back
                    <span className="sr-only sm:not-sr-only">to shop</span>
                </Link>
                <Link to ='/dashboard/checkout' type="button" className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50 dark:border-violet-600">
                    <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
                </Link>
            </div>

        </div>
    );
};

export default Cart;