import { createStackNavigator } from 'react-navigation';

import home from './pages/home-screen';
import profile from './pages/profile-screen';


export default createStackNavigator({
    home,
    profile
}, {
    navigationOptions: {
        headerStyle: {
             backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    }
});