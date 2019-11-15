import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';


export default createAppContainer(
    createStackNavigator({
        Pagina1,
        Pagina2
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#8877EE'
              },
              headerTintColor: '#FFF',
        },
        mode: 'modal'
    })
);