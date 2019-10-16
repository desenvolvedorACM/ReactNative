import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import contato from '../src/pages/contato';
import cadastro from '../src/pages/cadastro';


const App = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#ccc', padding: 10 }}>
    <Text style={{ fontSize: 25, textAlign: 'center' }}> Bem vindo a Home </Text>
    <Button title="Contato" onPress={() => { navigation.navigate('contato', { nome: 'alexandre', idade: 25 }); }} />
  </View>
);

App.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#FFF777'
  },
  headerTintColor: '#ff0000'
}

const Routes = createAppContainer(
  createStackNavigator({
    Home: { screen: App },
    contato: { screen: contato },
    cadastro: { screen: cadastro },
  }, {
    mode: 'modal'
  }));

export default Routes;
