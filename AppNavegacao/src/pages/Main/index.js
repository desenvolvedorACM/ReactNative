import React from 'react';
import { View, Text, Button } from 'react-native';


const Main = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: '#6A5ACD', padding: 10, justifyContent: "center" }}>

    <Text style={{ fontSize: 25, textAlign: 'center', color: '#FFF' }}> Bem vindo a Home </Text>

    <Button
      title="Contato"
      onPress={() => {
        navigation.navigate('contato', { nome: 'alexandre', idade: 25 });
      }} />
  </View>
);

Main.navigationOptions = {
  header: null
}


export default Main;