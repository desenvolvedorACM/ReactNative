import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sectionContainer: {
    flex: 1,
    height: 50,
    backgroundColor: '#CDCDCD',
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center'
  },
  sectionText: {
    fontSize: 14,
    color: '#000'
  },
  sectionHeaderText: {
    fontSize: 14,
    color: '#000'
  },
  sectionHeader: {
    height: 50,
    backgroundColor: '#708090',
    alignItems: 'center',
  }
});


const { container, sectionContainer, sectionText, sectionHeader, sectionHeaderText } = styles;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaAgenda: [
        {
          id: 1,
          nome: 'Alexandre',
          email: 'teste@teste.com'
        },
        {
          id: 2,
          nome: 'Alexandre',
          email: 'teste@teste.com'
        },
        {
          id: 3,
          nome: 'Alexandre',
          email: 'teste@teste.com'
        },
        {
          id: 4,
          nome: 'Alexandre',
          email: 'teste@teste.com'
        },
        {
          id: 5,
          nome: 'Alexandre',
          email: 'teste@teste.com'
        }
      ]
    }
  }

  renderItem = (item) => (
    <View style={sectionContainer}>
      <Text style={sectionText}>ID: {item.id}</Text>
      <Text style={sectionText}>NOME: {item.nome}</Text>
      <Text style={sectionText}>EMAIL: {item.email}</Text>
    </View>
  )

  render() {
    return (
      <View style={container}>
        <StatusBar barStyle="dark-content" />
        <View style={sectionHeader}>
          <Text style={sectionHeaderText}>HEADER</Text>
        </View>
        <FlatList
          data={this.state.listaAgenda}
          renderItem={({ item }) => this.renderItem(item)} />
      </View>
    );
  }
}

export default App;
