import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    textAlign: 'center',
    fontSize: 30,
    color: 'red'
  },
  valorPizza: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',

  }
});



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pizza: 0,
      pizzas: [
        { nome: 'Strogonoff', valor: 30.90 },
        { nome: 'Calabreas', valor: 33.90 },
        { nome: 'Mussarela', valor: 19.90 },
        { nome: 'Portuguesa', valor: 18.50 }
      ]
    };
  }

  render() {

    // v de valor ||| k de chave
    let pizzasItem = this.state.pizzas.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome} />
    });

    return (
      <View style={styles.container} >

        <View style={{ backgroundColor: '#000', padding: 10, alignItems: 'center' }}>
          <Text style={styles.logo}>Pizzaria React</Text>
        </View>

        <View>
          <Picker selectedValue={this.state.pizza} onValueChange={(itemValue, itemIndex) => this.setState({ pizza: itemValue })}>
            {pizzasItem}
          </Picker>

          <Text style={styles.valorPizza}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
        </View>
      </View>
    );

  }

}


