import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';

import api from '../../services/Api';
import Ionicons from 'react-native-vector-icons/Ionicons';
import padroes from '../../styles/default';

import styles from './styles';

const {
  imagem,
  container_info,
  container_esquerda,
  container_direita,
  container_contato,
  numero_container,
  nome,
  numero,
  icone_font_icon
} = styles;


class Contatos extends Component {

  static navigationOptions = () => {
    header: null
  }

  renderItem = ({ item }) => {
    return (
      <View style={container_contato}>
        <Image source={item.imagem} style={imagem} />

        <View style={container_info}>

          <View style={container_esquerda}>
            <Text style={nome}>{item.nome}</Text>

            <View style={numero_container}>
              <Text style={numero}>{item.numero}</Text>
            </View>
          </View>

          <View style={container_direita}>
            <TouchableOpacity>
              <Ionicons name='md-person-add'
                color={padroes.cores.verde_claro} style={ icone_font_icon } />
            </TouchableOpacity>
          </View>

        </View>

      </View>
    )

  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={api.exemplo_de_conversas}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default Contatos;
