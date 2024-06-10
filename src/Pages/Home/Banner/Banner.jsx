import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
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
                <div className='text-center mb-20'>
                    <SwiperSlide className=''><img src="https://i.ibb.co/gT9pCGX/james-coleman-IMe6f-LWEu6-E-unsplash.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/VtHtCgw/hal-gatewood-jb-Clos-Ds-D4-unsplash.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/kcRKb4P/christine-sandu-jw-Wt-Zrm67-VI-unsplash.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                   

                </div>

            </Swiper>
        </>
    );
};

export default Banner;