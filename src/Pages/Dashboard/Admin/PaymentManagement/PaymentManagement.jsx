import React from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const PaymentManagement = () => {


    
    const axiosSecure = useAxiosPublic();
    

    const { data: payments = [], refetch } = useQuery({

        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payments')

            return res.data;
        }
    })


    // ---------------
    const handleMakePaid = id => {
        axiosSecure.patch(`/payments/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();

                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "paid",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    // --------------

    return (
        <div>
      <h1 className='text-2xl text-center p-10'> Total payment history : {payments.length}</h1>

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Price</th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) =>  <tr key={payment._id} className="bg-base-200">
                        <th>{index+1}</th>
                        <td>${payment.price}</td>
                        <td>{payment.transactionId}</td>
                        <td>
                            <button onClick={() => handleMakePaid(payment._id)} className='btn  bg-green-600'>{payment.status }</button>
                            </td>
                    </tr>)}
                   
                 
                 
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentManagement;