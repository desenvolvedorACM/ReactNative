import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import styles from './styles';

const { container, Botao1, Botao2, Botao3, Botao4, containerPrincipal, texto } = styles;

const Main = ({ navigation }) =>
  (
    <View style={container}>

      <View style={containerPrincipal}>
        <TouchableOpacity style={Botao1} onPress={() => { navigation.navigate('Maps1') }}>
          <Text style={texto}>Mapas1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Botao2} onPress={() => { navigation.navigate('Maps2') }}>
          <Text style={texto}>Mapas2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Botao3} onPress={() => { navigation.navigate('Maps3') }}>
          <Text style={texto}>Mapas3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Botao4} onPress={() => { navigation.navigate('Maps4') }}>
          <Text style={texto}>Mapas4</Text>
        </TouchableOpacity>

      </View>

    </View>
  )

Main.navigationOptions = {
  title: 'Projeto Mapas',
  headerStyle: {
    backgroundColor: '#8877EE'
  },
  headerTintColor: '#FFF',
}

export default Main;
