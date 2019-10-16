import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import Page1 from './pages/page1';
import Page2 from './pages/page2';

const Routes = createAppContainer(
    createBottomTabNavigator({
        Pagina1: Page1,
        Pagina2: Page2,
    }));


export default Routes;