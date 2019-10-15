import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Home from './pages/home';
import Cadastro from './pages/cadastro';


export default createStackNavigator({
    Login: { screen: Login },
    Home: { screen: Home },
    Cadastro: { screen: Cadastro },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#666699'
        },
        headerTintColor: '#FFF'
    }
});
