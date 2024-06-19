import React from 'react';
import useMenu from '../../../../hooks/useMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { Link } from 'react-router-dom';

const AllDataManagement = () => {
    const [menu] = useMenu();
    const axiosSecure = useAxiosPublic();

    // ---------------------

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



                axiosSecure.delete(`/medicine/${id}`)
                    .then(res => {
                        if (res.data.deleteCount > 0) {

                            // refetch();
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


    // -----------------


    return (
        <div>

            <h2 className="text-6xl"> all Data {menu.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> </th>
                            <th> </th>

                            <th>Name</th>
                        
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map(item =>
                                <tr key={item._id}>

                                    <td> </td>

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
                            
                                    <td>
                                    <Link to ='/dashboard/update' className="btn btn-success">Update</Link>

                                    </td>
                                     

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


        </div>
    );
};

export default AllDataManagement;