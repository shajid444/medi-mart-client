
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTItle from '../../../Component/SectionTitle/SectionTItle';




const Catagory = () => {
    return (
      <section>
        <SectionTItle
        subHeading = {"!!OFFER!!"}
        heading={"Discount Products"}
        ></SectionTItle>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-20 mb-16 "
        >
            <div className='flex justify-center items-center'>
            <SwiperSlide ><img  src="https://i.ibb.co/kcRKb4P/christine-sandu-jw-Wt-Zrm67-VI-unsplash.jpg" alt="" />
            <h1 className='text-3xl text-center text-white text-opacity-70 uppercase  -mt-16'>Tablet</h1>
            </SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/Wt7BDX0/mockup-free-Pb-GC2-COj-Wg-A-unsplash.jpg" alt="" />
            <h1 className='text-3xl text-center text-white text-opacity-70 uppercase -mt-16'>Syrup</h1></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/hBxQB36/christina-victoria-craft-WHSnk-Iw-Wpec-unsplash.jpg" alt="" />
            <h1 className='text-3xl text-center text-white text-opacity-70 uppercase -mt-16'>Capsule</h1></SwiperSlide>
            <SwiperSlide><img src="https://i.ibb.co/1Jy578H/mika-baumeister-Mtu3-Rd1-OBI-unsplash.jpg" alt="" />
            <h1 className='text-3xl text-center text-white text-opacity-70 uppercase -mt-16'>Injection</h1></SwiperSlide>

            </div>
         
            
           
        </Swiper>
      </section>
    );
};

export default Catagory;