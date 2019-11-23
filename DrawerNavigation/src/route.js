import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './pages/home';
import Contato from './pages/contato';
import CustomDrawer from './components/CustomDrawer';


export default createAppContainer(
  createDrawerNavigator({
    Home: { screen: Home },
    Contato: { screen: Contato },
  }, {
    initialRouteName: 'Contato',
    drawerBackgroundColor: '#889999',
    contentComponent: CustomDrawer
  })
);

