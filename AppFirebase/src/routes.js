import { createStackNavigator } from 'react-navigation';
import ListaFuncionarios from './pages/ListaFuncionarios';
import Home from './pages/Home';

export default createStackNavigator({
    Home,
    ListaFuncionarios,
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: '#FFF'
    }
});