import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Contato from './pages/Contato';
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
    Contato
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
