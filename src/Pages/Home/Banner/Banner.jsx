import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const Banner = () => {
    const axiosSecure = useAxiosPublic();

    const { data: banner = [], refetch } = useQuery({

        queryKey: ['banner'],
        queryFn: async () => {
            const res = await axiosSecure.get('/banner' );
            return res.data;
        }
    })

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper rounded-xl h-[600px]"
            >
                <div className='text-center mb-20 w-full'>
                   
                    {banner.map(item => <SwiperSlide key={item._id}  className=''><img className='object-cover w-full' src={item.banner} alt="" /></SwiperSlide>)}
                 

                </div>

            </Swiper>
        </>
    );
};

export default Banner;