import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import Home from './src/pages/home';
import Contato from './src/pages/contato';
import CustomDrawer from './src/components/CustomDrawer';


const Routes = createAppContainer(
  createDrawerNavigator({
    Home: { screen: Home },
    Contato: { screen: Contato },
  }, {
    initialRouteName: 'Contato',
    drawerBackgroundColor: '#373737',
    contentComponent: CustomDrawer
  })
);

export default Routes;
