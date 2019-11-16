import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';
import Project from './pages/project';

export default createStackNavigator({
    Main,
    Project
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