import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './pages/Home';
import Contato from './pages/Contato';
import CustomDrawer from './components/CustomDrawer';


const drawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Contato: { screen: Contato },
}, {
  initialRouteName: 'Contato',
  drawerBackgroundColor: '#889999',
  contentComponent: CustomDrawer
});

export default createAppContainer(drawerNavigator);


