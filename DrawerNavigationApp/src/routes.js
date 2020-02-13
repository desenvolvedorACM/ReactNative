import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';


const drawerNavigator = createDrawerNavigator(
    {
        Home,
        Profile,
        Settings
    },
    {
        initialRouteName: 'Home'
    }
);


export default createAppContainer(drawerNavigator);