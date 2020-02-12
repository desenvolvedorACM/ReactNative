import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native';
import './config/StatusBarConfig';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  sectionContainer: {
    flex: 1,
    height: 80,
    borderWidth: 1,
    borderColor: '#808080',
    backgroundColor: '#DDD',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  sectionText: {
    fontSize: 14,
    color: '#000'
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  sectionHeader: {
    backgroundColor: '#8055FF',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center'
  }
});


const {
  container,
  sectionContainer,
  sectionText,
  sectionHeader,
  sectionHeaderText
} = styles;


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

  renderItem = ({ item }) => (
    <View style={sectionContainer}>
      <Text style={sectionText}>ID: {item.id}</Text>
      <Text style={sectionText}>NOME: {item.nome}</Text>
      <Text style={sectionText}>EMAIL: {item.email}</Text>
    </View>
  )

  render() {
    return (
      <View style={container}>

        <View style={sectionHeader}>
          <Text style={sectionHeaderText}>FLAT LIST</Text>
        </View>

        <FlatList
          data={this.state.listaAgenda}
          renderItem={this.renderItem} />
      </View>
    );
  }
}

export default App;
