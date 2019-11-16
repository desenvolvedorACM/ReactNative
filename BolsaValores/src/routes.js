import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator({
    Main
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
    });