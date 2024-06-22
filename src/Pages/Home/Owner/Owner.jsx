import SectionTItle from "../../../Component/SectionTitle/SectionTItle";


const Owner = () => {
    return (
        <section className="py-6 sm:py-12 bg-slate-300 dark:text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">

                    <SectionTItle heading={'ABOUT THE Medi Mart'} subHeading={'medi mart means lucky peach.'}></SectionTItle>

                    <p className="font-serif text-wrap text-sm text-gray-600">medi mart was founded by  David Chang in 2004 with the opening of medi mart Noodle Bar in New York City. </p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                    <div className="flex flex-col border rounded-t-full shadow-2xl shadow-black dark:bg-gray-50">

                        <img alt="" className="object-cover rounded-t-full w-full  h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww" />



                        <div className="flex flex-col flex-1 p-6">

                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">CEO</a>
                            <h3 className="flex-1 py-2 text-sm font-semibold leading-snug text-gray-500">Marguerite Zabar Mariscal is the CEO of medi mart. Marguerite joined medi mart in 2011 as an intern. She took on design and communications for the group and was named Brand Director in 2016</h3>
                           
                        </div>
                    </div>
                    <div className="flex flex-col border rounded-t-full shadow-2xl shadow-black dark:bg-gray-50">

                        <img alt="" className="object-cover rounded-t-full w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsfGVufDB8fDB8fHww" />

                        <div className="flex flex-col flex-1 p-6">

                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">About our service</a>
                            <h3 className="flex-1 py-2 text-sm text-gray-500 font-semibold leading-snug">We provide our best product </h3>
                        </div>
                    </div>
                    <div className="flex flex-col border rounded-t-full shadow-2xl shadow-black dark:bg-gray-50">

                        <img alt="" className="object-cover rounded-t-full w-full h-52 dark:bg-gray-500" src="https://images.unsplash.com/photo-1631613638180-23f9b08c1afb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3QlMjBib3h8ZW58MHx8MHx8fDA%3D" />

                        <div className="flex flex-col flex-1 p-6">

                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">Delivery</a>
                            <h3 className="flex-1 py-2 text-sm text-gray-500 font-semibold leading-snug">
                                We provide delivery system. Our product reach to the customer within 1 or 2 days</h3>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Owner;