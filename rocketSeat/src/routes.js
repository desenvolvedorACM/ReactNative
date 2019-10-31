import { createStackNavigator } from 'react-navigation';

import home from './pages/home-screen';
import product from './pages/product';


export default createStackNavigator({
    home,
    product
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    }
});