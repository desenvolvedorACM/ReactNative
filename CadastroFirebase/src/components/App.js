import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import Routing from '../router.module';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <View>
          <Routing />
      </View>
    );
  }
}

export default App;
