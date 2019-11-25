import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ImageBackground,
  TextInput
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import HeaderConversa from '../../components/HeaderConversa';

import api from '../../services/Api';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {
  imageBg,
  inserir_texto_container,
  inserir_texto,
  botao_enviar,
  mensagem_container,
  mensagem_container_remetente,
  mensagem_remetente,
  mensagem,
  horario_mensagem } = styles;

const imagemBg = require('../../assets/images/wallpaper_whats.png');

class Conversa extends Component {

  static navigationOptions = {
    header: null
  }


  renderItem = ({ item }) => (
    <View style={item.usuario == '1'
      ? mensagem_container
      : mensagem_container_remetente}>

      <View style={item.usuario == '1'
        ? mensagem
        : mensagem_remetente}>
        <Text>{item.mensagem}</Text>
        <Text style={horario_mensagem}>{item.horario_mensagem}</Text>
      </View>

    </View>
  )


  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={imagemBg} style={imageBg}>
          <HeaderConversa  {...this.props} />

          <FlatList
            style={{ marginTop: 10 }}
            showsVerticalScrollIndicator={false}
            data={api.exemplo_de_conversa_pessoal}
            keyExtractor={(item, index) => `list-item-${index}`}
            renderItem={this.renderItem}
          />

          <View style={inserir_texto_container}>
            <TextInput
              placeholder='Digite uam conversa...'
              style={inserir_texto} />

            <TouchableOpacity style={botao_enviar}>

              <Ionicons
                name='md-send'
                color='#FFF'
                style={{ alignSelf: 'center', fontSize: 25, marginLeft: 5 }} />

            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Conversa;
