import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import api from '../../services/Api';
import Ionicons from 'react-native-vector-icons/Ionicons'
import padroes from '../../styles/default';

import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const {
  imagem,
  container_info,
  container_esquerda,
  container_direita,
  ligacoes_container,
  data_ligacao,
  nome,
  container_ligacao,
  margin_icon
} = styles;

class Ligacoes extends Component {

  static navigationOptions = {
    title: 'Ligações'
  }

  renderItem = ({ item }) => {
    return (
      <View style={container_ligacao}>
        <Image source={item.imagem} style={imagem} />

        <View style={container_info}>

          <View style={container_esquerda}>
            <Text style={nome}>{item.nome}</Text>

            <View style={ligacoes_container}>

              <IconMaterialCommunityIcons
                style={ margin_icon }
                name={item.call}
                font={18}
                color={item.call === 'call-received' ? 'red' : padroes.cores.verde_claro} />

              <Text numberOfLines={1} style={data_ligacao}>{item.data_ligacao}</Text>
            </View>
          </View>

          <View style={container_direita}>
            <TouchableOpacity>
              <Ionicons name={item.tipo_de_ligacao === 'cel' ? 'ios-call' : 'ios-videocam'}
                color={padroes.cores.primaria_claro}
                font={35} />
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
          data={api.exemplo_de_ligacoes}
          keyExtractor={(item, index) => `list-item-${index}`}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default Ligacoes;
