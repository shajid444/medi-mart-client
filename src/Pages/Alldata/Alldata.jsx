import useMenu from "../../hooks/useMenu";
import MenuItem from "../Shared/MenuItem/MenuItem";


const Alldata = () => {
    const [menu] = useMenu();
    
    return (
        <div className="grid gap-5 p-10 lg:grid-cols-2">
            {
                menu.map (item => <MenuItem key={item._id} item={item}></MenuItem> )
            }
        </div>
    );
};

export default Alldata;