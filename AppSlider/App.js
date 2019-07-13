import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
  },
  texto: {
    textAlign: 'center',
    fontSize: 35
  }

});


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      valor: 0
    };
  }

  render() {

    return (
      <View style={styles.container}>

        <Slider minimumValue={30}
          maximumValue={120}
          onValueChange={(valorSelecionado) => this.setState({ valor: valorSelecionado })}
          value={this.state.valor}
          minimumTrackTintColor="#FF0000"
          maximumTrackTintColor="#FF1CAE"
        />

        <Text style={styles.texto}>Você esta com {this.state.valor.toFixed(0)}Kg</Text>

      </View>
    );

  }

}



