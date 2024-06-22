import React from 'react';

const Update = () => {
    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">update Inormation</p>
                     
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="name" className="text-sm">medicine name</label>
                            <input id="name" type="text" placeholder="medicine name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-teal-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="price" className="text-sm">price</label>
                            <input id="price" type="text" placeholder="price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-teal-600 dark:border-gray-300" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="photo" className="text-sm">photo</label>
                            <input id="photo" type="url" placeholder="photo" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-teal-600 dark:border-gray-300" />
                        </div>
                      
                   
                    </div>
                </fieldset>
                <button className='btn'>update</button>
               
            </form>
        </section>
    );
};

export default Update;