import React, { Component } from 'react';
import { View, Text } from 'react-native';

import * as firebase from '../firebaseConnection';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {};
    //this.initializeAppFireBase();
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text>TESTE</Text>
      </View>
    );
  }
}

export default Login;


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    paddingTop: 32
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});