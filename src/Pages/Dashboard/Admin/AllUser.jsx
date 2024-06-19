import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaTrashAlt, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../hooks/useAxiosPublic';

const AllUser = () => {

    

    const axiosSecure = useAxiosPublic();
    const { data: user = [], refetch } = useQuery({

        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure.get('/user' );
            return res.data;
        }
    })
    // ------make admin--------
    const handleMakeAdmin = id => {
        axiosSecure.patch(`/user/admin/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "added to admin",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // ----------------------delete-------------------------------

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



                axiosSecure.delete(`/user/${id}`)
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
            all users{user.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            user.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>

                                <td>
                                {
                                     user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-ghost btn-xs">
                                     <FaUser> </FaUser>
                                 </button>




                                }
                                   

                                </td>
                                <td>
                                    
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>



                                    

                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;