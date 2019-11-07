import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Maps1 from './pages/maps1';
import Maps2 from './pages/maps2';
import Maps3 from './pages/maps3';
import Maps4 from './pages/maps4';


export default createAppContainer(
    createStackNavigator({
        Main,
        Maps1,
        Maps2,
        Maps3,
        Maps4
    },
        {
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#8877EE'
                },
                headerTintColor: '#FFF',
            },
            mode: 'modal'
        })
)
