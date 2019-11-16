import { createStackNavigator } from 'react-navigation';

import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';

import Contato from './pages/Contato';
import Conversa from './pages/Conversa';
import Conversas from './pages/Conversas';
import Ligacoes from './pages/Ligacoes';

class App extends Component {

  render() {
    return (
      <SafeAreaView>
        <Text> routes </Text>
      </SafeAreaView>
    );
  }
}

export default App;
