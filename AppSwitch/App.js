import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    }
  }


  switchValue(value) {

    let state = this.state;
    state.status = value;
    this.setState(state);
  }

  render() {

    return (
      <View style={styles.container}>

        <Switch value={this.state.status}
          onValueChange={this.switchValue}
          thumbTintColor="#000000"
          onTintColor="#FF0066"
        />

        <Switch value={this.state.status}
          onValueChange={(valorSelecionado) => this.setState({ status: valorSelecionado })}
          thumbTintColor="#000000"
          onTintColor="#FF0000"
        />

        <Text>{(this.state.status) ? "Ativo" : "Inativo"}</Text>

      </View>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'flex-start'
  }
});

