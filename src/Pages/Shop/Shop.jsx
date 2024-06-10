import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import MenuItem from '../Shared/MenuItem/MenuItem';

const Shop = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const tablet = menu.filter(item => item.category == 'tablet');
    const syrup = menu.filter(item => item.category == 'syrup');
    const capsule = menu.filter(item => item.category == 'capsule');
    const injection = menu.filter(item => item.category == 'injection');

    return (
        <div className='p-20'>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Tablet</Tab>
                    <Tab>Capsule</Tab>
                    <Tab>Syrup</Tab>
                    <Tab>Injection</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid gap-5 p-10 lg:grid-cols-2">
                        {
                            tablet.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid gap-5 p-10 lg:grid-cols-2">
                        {
                            syrup.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid gap-5 p-10 lg:grid-cols-2">
                        {
                            capsule.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className="grid gap-5 p-10 lg:grid-cols-2">
                        {
                            injection.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                        }
                    </div>

                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Shop;