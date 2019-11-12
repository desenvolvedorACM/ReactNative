import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/home';
import Login from './pages/login';
import Cadastro from './pages/cadastro';


const container = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home
        },
        Cadastro: {
            screen: Cadastro
        },
        Login: {
            screen: Login
        }
    }, {
        mode: 'modal',
        headerStyle: {
            backgroundColor: '#CDCDCD'
        },
        headerTintColor: '#CD0066'
    }));

    export default container;