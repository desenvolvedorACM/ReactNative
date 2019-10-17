import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import pagina1 from './src/pages/pagina1';
import pagina2 from './src/pages/pagina2';


const routes = createAppContainer(
  createBottomTabNavigator({
    Pagina1: { screen: pagina1 },
    Pagina2: { screen: pagina2 }
  }));

export default routes;