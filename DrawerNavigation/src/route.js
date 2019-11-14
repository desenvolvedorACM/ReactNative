import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './pages/home';
import Contato from './pages/contato';
import CustomDrawer from './components/CustomDrawer';


const drawerNavigator = createAppContainer(
  createDrawerNavigator({
    Home: { screen: Home },
    Contato: { screen: Contato },
  }, {
    initialRouteName: 'Contato',
    drawerBackgroundColor: '#373737',
    contentComponent: CustomDrawer
  })
);

export default drawerNavigator;
