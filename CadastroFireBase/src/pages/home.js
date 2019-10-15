import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Bem vindo </Text>
      </View>
    );
  }
}

export default Home;
