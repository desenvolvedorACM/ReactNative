import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Maps1 from './pages/maps1';
import Maps2 from './pages/maps2';
import Maps3 from './pages/maps3';


export default createAppContainer(
    createStackNavigator({
        Main: { screen: Main },
        Maps1,
        Maps2,
        Maps3
    },
        {
            mode: 'modal'
        })
)
