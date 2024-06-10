import { Link } from "react-router-dom";
import SectionTItle from "../../../Component/SectionTitle/SectionTItle";


const Card = () => {
    return (
        <section className=" ">
            <SectionTItle
                subHeading={"From 11.00 am to 10.00pm"}
                heading={"Order Online"}
            ></SectionTItle>
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
                <Link to='/spc' className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " >
                    <img src='https://i.ibb.co/VtHtCgw/hal-gatewood-jb-Clos-Ds-D4-unsplash.jpg' alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Tablet</h2>



                            <div className="flex gap-5">
                                <p>Quantity </p>


                            </div>
                        </div>

                    </div>
                </Link>
                <Link to ='/capsule' className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " >
                    <img src='https://i.ibb.co/hBxQB36/christina-victoria-craft-WHSnk-Iw-Wpec-unsplash.jpg' alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Capsule</h2>



                            <div className="flex gap-5">
                                <p>Quantity </p>


                            </div>
                        </div>

                    </div>
                </Link>
                <Link to ='/syrup' className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " >
                    <img src='https://i.ibb.co/jJz3vvX/images.jpg' alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Syrup</h2>



                            <div className="flex gap-5">
                                <p>Quantity </p>


                            </div>
                        </div>

                    </div>
                </Link>
                <Link to ='/injection' className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " >
                    <img src='https://i.ibb.co/L6pQy0C/hakan-nural-ni-Bllet7s-Tw-unsplash.jpg' alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Injection</h2>



                            <div className="flex gap-5">
                                <p>Quantity </p>


                            </div>
                        </div>

                    </div>
                </Link>
                <Link className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " >
                    <img src='https://i.ibb.co/SP1zJgk/foto-bakirkoy-h-Un1f9-G-rmc-unsplash.jpg' alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Serum</h2>



                            <div className="flex gap-5">
                                <p>Quantity </p>


                            </div>
                        </div>

                    </div>
                </Link>
                <Link className="lg:max-w-xs md:max-w-xs sm:w-full lg:mx-auto mt-7 mb-7 rounded-md shadow-2xl shadow-slate-400 dark:bg-gray-50 dark:text-gray-800 " >
                    <img src='https://i.ibb.co/VtHtCgw/hal-gatewood-jb-Clos-Ds-D4-unsplash.jpg' alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                    <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-semibold tracking-wide">Tablet</h2>



                            <div className="flex gap-5">
                                <p>Quantity </p>


                            </div>
                        </div>

                    </div>
                </Link>
            </div>



        </section>
    );
};

export default Card;