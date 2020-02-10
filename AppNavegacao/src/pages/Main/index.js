import React from 'react';
import { View, Text, Button } from 'react-native';


const Main = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#ccc', padding: 10 }}>
    <Text style={{ fontSize: 25, textAlign: 'center' }}> Bem vindo a Home </Text>
    <Button title="Contato" onPress={() => {
      navigation.navigate('contato', { nome: 'alexandre', idade: 25 });
    }} />
  </View>
);

App.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#FFF777'
  },
  headerTintColor: '#ff0000'
}


export default Main;