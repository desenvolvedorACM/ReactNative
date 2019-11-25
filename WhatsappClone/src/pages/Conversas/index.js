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
import styles from './styles';

const {
  imagem,
  container_info,
  container_esquerda,
  container_conversas,
  ultima_mensagem_container,
  ultimo_mensageiro,
  container_direita,
  horario_ultima_mensagem,
  mensagens_nao_lida_container,
  mensagens_nao_lida_texto,
  mensagens_nao_lida_container_branco,
  nome,
  ultima_mensagem
} = styles;

class Conversas extends Component {

  static navigationOptions = {
    header: null
  }

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={ () => { this.props.navigation.navigate('Conversa', { perfil: item}) }}>
        <View style={container_conversas}>
          <Image source={item.imagem} style={imagem} />

          <View style={container_info}>

            <View style={container_esquerda}>
              <Text style={nome}>{item.nome}</Text>
              <View style={ultima_mensagem_container}>
                <Text numberOfLines={1} style={ultimo_mensageiro}>{item.ultimo_mensageiro}:</Text>
                <Text numberOfLines={1} styles={ultima_mensagem}>{item.ultima_mensagem}</Text>
              </View>
            </View>

            <View style={container_direita}>
              <Text style={horario_ultima_mensagem}>{item.horario_ultima_mensagem}</Text>
              {item.mensagens_nao_lida > 0 ?
                (
                  <View style={mensagens_nao_lida_container}>
                    <Text style={mensagens_nao_lida_texto}>{item.mensagens_nao_lida}</Text>
                  </View>
                ) :
                (
                  <View style={mensagens_nao_lida_container_branco} />
                )
              }

            </View>
          </View>
        </View>
      </TouchableOpacity>
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

export default Conversas;
