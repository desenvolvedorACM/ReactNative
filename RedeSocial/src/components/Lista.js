import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from '../config/styles';

export default class Lista extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data
    };


    this.carregaIcone = this.carregaIcone.bind(this);
    this.like = this.like.bind(this);

  }

  // Carrega icone de Like e verifica se ta true ou false para pegar a imagem 
  carregaIcone(likeada) {
    return likeada ? require('../img/likeada.png') :
      require('../img/like.png')

  }

  // Funcao chamada quando clica no botao LIKE
  like() {
    let state = this.state;

    if (state.feed.likeada == true) {
      state.feed.likeada = false;
      state.feed.likers -= 1;
    } else {
      state.feed.likeada = !state.feed.likeada
      state.feed.likers += 1;
    }

    this.setState(state);
  }

  mostraLikes(likers) {
    let state = this.state;

    if (state.feed.likers <= 0) {
      return;
    }


    return (
      <Text style={styles.like}>
        {state.feed.likers} {state.feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    );
  }



  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image style={styles.fotoPerfil} source={{ uri: this.state.feed.imgperfil }} />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>

        <Image resizeMode="cover" style={styles.fotoPublicacao} source={{ uri: (this.state.feed.imgPublicacao) }} />

        <View style={styles.areaBotoes}>
          <TouchableOpacity onPress={this.like}>
            <Image style={styles.iconeLike} source={this.carregaIcone(this.state.feed.likeada)} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend} onPress={() => { }}>
            <Image style={styles.iconeLike} source={require('../img/send.png')} />
          </TouchableOpacity>
        </View>

        {this.mostraLikes(this.state.feed.likers)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {this.state.feed.nome}
          </Text>
          <Text style={styles.descRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>

      </View>
    );
  }
}

