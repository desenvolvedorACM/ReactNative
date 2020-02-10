import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../src/pages/Main';
import contato from '../src/pages/Contato';
import cadastro from '../src/pages/Cadastro';


export default createAppContainer(
    createStackNavigator({
        Home: { screen: Main },
        contato: { screen: contato },
        cadastro: { screen: cadastro },
    },
        {
            navegationOptions: {
                headerStyle: {
                    backgroundColor: '#112255'
                },
                headerTintColor: '#FFF',
                headerTitleStyle: {
                    textAlign: "center",
                    flex: 1
                }
            },
            mode: 'modal'
        }));


