import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import api from '../services/api';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  List: {
    padding: 10,
  },
  productContainer: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333'
  },
  productDescription: {
    fontSize: 16,
    color: "#999",
    marginTop: 5,
    lineHeight: 24
  },
  productButton: {
    backgroundColor: '#836FFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  productButtonText: {
    fontSize: 15
  }
});

const { container, List, productContainer, productTitle, productDescription, productButton, productButtonText } = styles;

//console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
console.disableYellowBox = true;

const showAlert = (message) => {
  Alert.alert(`${message}`)
}

export default class HomeScreen extends Component {


  static navigationOptions = {
    title: 'Seja bem vindo ao app',
  };

  state = {
    docs: [],
    error: '',
    page: 1,
    productInfo: {}
  }

  //Disparado logo que componentes são carregados.
  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = async (page = 1) => {
    try {
      const response = await api.get(`/products?page=${page}`);
      const { docs, ...productInfo } = response.data;

      this.setState({
        docs: [...this.state.docs, ...docs],
        productInfo,
        page
      });
      
      console.log(docs);
    } catch (error) {
      console.warn(`${error}`);
      this.setState({ error: 'Error no servidor' });
    }
  }

  renderItem = ({ item }) => (
    <View style={productContainer}>
      <Text style={productTitle}>{item.title}</Text>
      <Text style={productDescription}>{item.description}</Text>
      <TouchableOpacity style={productButton} onPress={() => { }}>
        <Text style={productButtonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  )

  loadMore = () => {
    const { page, productInfo } = this.state;
    if (page === productInfo.pages) return;

    const pageNumber = page + 1;
    this.loadProduct(pageNumber);
  }

  render() {
    return (
      <View style={container}>
        <FlatList
          contentContainerStyle={List}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
          onEndReached={this.loadMore}
          onEndReachedThreshold={0.1} />
      </View>
    );
  }
}
