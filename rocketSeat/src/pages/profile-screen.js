import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F6FF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  box: {
    width: 400,
    height: 80,
    backgroundColor: '#F00'
  }
});

const { container, welcome, box } = styles;

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> App </Text>
        <View style={styles.box}>
          <Text style={styles.welcome}> Conteudo </Text>
        </View>
      </View>
    );
  }
}



export default ProfileScreen;