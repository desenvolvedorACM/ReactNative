import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Contatos from './pages/Contatos';
import Conversas from './pages/Conversas';
import Ligacoes from './pages/Ligacoes';
import Conversa from './pages/Conversa';
import Header from './components/Header';

import padroes from './styles/default';

console.disableYellowBox = true;

export default class App extends Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <AppTabNavigator />
      </SafeAreaView>
    );
  }
}

const stackNavigator = createStackNavigator({
  Home: Conversas,
  Conversa
});

const AppTabNavigator = createAppContainer(
  createMaterialTopTabNavigator({
    Conversas: stackNavigator,
    Ligacoes,
    Contatos
  }, {
    tabBarPosition: 'top',
    initialRouteName: 'Conversas',
    defaultNavigationOptions: {
      tabBarOptions: {
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold'
        },
        style: {
          backgroundColor: padroes.cores.primaria
        }
      }
    }
  })
);

stackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName;
  console.log(routeName);

  if (routeName == 'Conversa') {
    tabBarVisible = false;
  }

  return { tabBarVisible };
}