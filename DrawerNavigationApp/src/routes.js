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
        initialRouteName: 'Home',
        contentOptions: {
            activeTintColor: '#FFF',
            activeBackgroundColor: '#EE4455',
            labelStyle: {
                fontSize: 14
            }
        }
    }
);


export default createAppContainer(drawerNavigator);