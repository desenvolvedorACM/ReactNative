import React from 'react';
import { Text, View, Button } from 'react-native';

const Page2 = ({ navigation }) => (
  <View style={{ flex: 1, padding: 10 }}>
    <Text>Bem vindo pagina 2</Text>
    <Button title="Voltar" onPress={() => { navigation.popToTop() }} />
  </View>
);

Page2.navigationOptions = {
  tabBarLabel: 'Pagina 2'
}

export default Page2;
