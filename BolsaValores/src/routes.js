import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Grafic from './pages/graphic';

export default createStackNavigator({
    Main,
    Grafic
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
            },
            headerTitle: "Consultar dados na bolsa"
        },
        mode: 'card'
    });