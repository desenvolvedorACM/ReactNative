import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Entrada from './pages/entrada';
import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';
import Pagina3 from './pages/pagina3';
import Pagina4 from './pages/pagina4';


export default createAppContainer(
    createStackNavigator({
        Entrada,
        Pagina1,
        Pagina2,
        Pagina3,
        Pagina4
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#559000'
            },
            headerTintColor: '#FFF',
        },
        mode: 'modal'
    })
);
