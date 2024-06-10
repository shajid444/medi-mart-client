import { useParams } from "react-router-dom";


const Modal = () => {
    const {item} = useParams();
    console.log(item);
    return (
        <div className="p-4 w-3/4 mx-auto shadow-xl bg-slate-300 ">
      
        <div className="flex justify-between pb-4 border-bottom">
            <div className="flex items-center">
                <a rel="noopener noreferrer" href="#" className="mb-0 capitalize text-3xl text-primary font-bold"> NAme</a>
            </div>

        </div>
        <div className="space-y-4">
            <div className="space-y-2">
                <img src='https://i.ibb.co/hBxQB36/christina-victoria-craft-WHSnk-Iw-Wpec-unsplash.jpg' alt="" className="block object-cover h-full object-center w-full rounded-md h-96 dark:bg-gray-500" />
                <div className="flex items-center text-base justify-around">
                    <span className="bg-slate-400 p-3 rounded-lg">Price : </span>
                   
                    <span className="bg-slate-400  p-3 rounded-lg">Quantity : </span>
                </div>
            </div>
            <div className="text-center bg-slate-300 p-5 rounded-md">
               Description : 
            </div>
            <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold dark:text-violet-600"></h3>
                </a>
                <p className="leading-snug dark:text-gray-600"></p>

                <div className="flex justify-between bg-slate-300 p-5 rounded-md">
                    
                    <p className="text-xl font-semibold ">
                        #Made BY :
                    </p>
                    <p className="text-xl font-semibold">
                        #Catagory : 
                    </p>
                  
                   
                </div>
              




            </div>
        </div>
    </div>
    );
};

export default Modal;