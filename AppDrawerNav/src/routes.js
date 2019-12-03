import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


import Main from './pages/Main';
import Contato from './pages/Contato';

export default createAppContainer(
    createStackNavigator({
        Main,
        Contato
    },
        {
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#112255'
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    textAlign: "center",
                    flex: 1
                }
            },
            mode: 'card'
        }));