import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';
import Pagina3 from './pages/pagina3';
import Entrada from './pages/entrada';


export default createAppContainer(
    createStackNavigator({
        Entrada: { screen: Entrada },
        Pagina1: Pagina1,
        Pagina2: Pagina2,
        Pagina3: Pagina3
    }, {
        mode: 'modal'
    })
);