import React from 'react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const BannerManagement = () => {

    const axiosSecure = useAxiosPublic();

    axiosSecure.get('/banner')
    .then(res => {
        console.log(res.data);
    })

    const handleBanner = event => {
        event.preventDefault();
        const form = event.target;
        const banner = form.banner.value;
        const userInfo = {
            banner

        }

        axiosSecure.post('/banner', userInfo)
        .then(res =>{
            console.log(res.data);
            Swal.fire({
                title: "Added Successfully",
                showClass: {
                    popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
                },
                hideClass: {
                    popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
                }
            });
            // navigate('/');
        })

        console.log(banner);
    
    }
    return (
        <div>

            <h1 className='text-3xl font-semibold text-center'>Enter the image url for Adding in the Banner </h1>

        
            <form onSubmit={handleBanner} className='flex flex-col p-10 space-y-5' >
                <label className="label">
                    <span className="label-text">URL</span>
                </label>
                <input type="url" name = 'banner' placeholder="image url" className="input input-bordered" required />
                <label className="label">
                    <span className="label-text">Name of medicine</span>
                </label>
                <input type="text" name = 'name' placeholder="name" className="input input-bordered" required />

                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input type="text" name = 'description' placeholder="Description" className="input input-bordered" required />

                <button className='btn bg-green-600'>submit</button>
            </form>

        </div>
    );
};

export default BannerManagement;