import React from 'react';
import useMenu from '../../../hooks/useMenu';
import MenuItem from '../MenuItem/MenuItem';

const SpcCapsule = () => {
    const [menu] = useMenu();
    const category = menu.filter(item => item.category == 'capsule');
    return (
        <div className="grid gap-5 p-10 lg:grid-cols-2">
            {
                category.map (item => <MenuItem key={item._id} item={item}></MenuItem> )
            }
        </div>
    );
};

export default SpcCapsule;