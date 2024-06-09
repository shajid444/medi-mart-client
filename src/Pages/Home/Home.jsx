
import MenuItem from '../Shared/MenuItem/MenuItem';
import Banner from './Banner/Banner';
import Card from './Card/Card';
import Catagory from './Catagory/Catagory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Card></Card>
            <Catagory></Catagory>
            <MenuItem></MenuItem>


        </div>
    );
};

export default Home;