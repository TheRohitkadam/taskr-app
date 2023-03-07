import React from 'react'
// import { hasChildren } from '../../../utils/helpers/SidebarUtils';
// import MultiLevel from './MultiLevel';
import SingleLevel from './SingleLevel';

const MenuButton = ({ item, open }: any) => {
    
    // if (hasChildren(item)) return <MultiLevel item={item} drawerOpen={open} />

    return <SingleLevel item={item} drawerOpen={open} />
}

export default MenuButton