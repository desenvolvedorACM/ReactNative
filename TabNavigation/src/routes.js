import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Page1 from './pages/page1';
import Page2 from './pages/page2';

const Routes = createAppContainer(
    createStackNavigator({
        Pagina1: Page1,
        Pagina2: Page2,
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#DA552F'
            },
            headerTintColor: '#FFF'
        }
    }));


export default Routes;