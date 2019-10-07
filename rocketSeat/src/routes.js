import { createStackNavigator } from 'react-navigation';

import home from './pages/home-screen';
import profile from './pages/profile-screen';
import product from './pages/product';


export default createStackNavigator({
    home,
    profile,
    product
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    }
});