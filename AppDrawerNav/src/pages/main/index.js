import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';

class Main extends Component {

  static navigationOptions = {
    title: 'Inicio'
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

        <TouchableOpacity style={{ }}>
          <Text> Main </Text>
        </TouchableOpacity>

      </SafeAreaView >
    );
  }
}

export default Main;
