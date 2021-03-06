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
  drawerBackgroundColor: '#FFF',
  contentOptions: {
    activeTintColor: 'red',
    activeBackgroundColor: '#CCC'
  },
  contentComponent: CustomDrawer
});

export default createAppContainer(drawerNavigator);


