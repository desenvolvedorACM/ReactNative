import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  Image,
  ToastAndroid,
  Alert
} from 'react-native';
import firebase from '../config/firebaseConnection';
import styles from '../config/styles';


const img = require('../assets/firebase-logo.png');

class Cadastro extends Component {

  constructor(props) {
    super(props);

    this.state = { email: '', senha: '' };
    this.Cadastrar = this.Cadastrar.bind();
  }


  Cadastrar = () => {
    try {

      if (this.state.email != '' || this.state.senha != '') {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
          .then(resp => {
            Alert.alert('Aviso', 'Cadastro realizado com sucesso!');
          }).catch(error => {
            if (error.code == 'auth/weak-password') {
              Alert.alert('Erro', 'A senha deve conter no minímo 6 caracteres!');
            } else if (error.code == 'auth/invalid-email') {
              Alert.alert('Erro', 'E-mail inválido!');
            } else {
              Alert.alert('Erro', `Error Cod. ${error.code}`);
            }
          });
      } else {
        ToastAndroid.showWithGravity(
          'Preencha todos os campos',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    } catch (error) {
      Alert.alert('Erro', `Algum erro gerado. ${error}`);
    }
  }

  render() {
    return (
      <View style={styles.sectionCadastro}>

        <View>
          <Image source={ img } style={ styles.imgCadastro } />
        </View>

        <TextInput
          placeholder="E-mail"
          style={styles.inpuCadastro}
          placeholderTextColor='#fff'
          underlineColorAndroid="transparent"
          onChangeText={(email) => { this.setState({ email }); }} />

        <TextInput
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor='#fff'
          style={styles.inpuCadastro}
          underlineColorAndroid="transparent"
          onChangeText={(senha) => { this.setState({ senha }); }} />

        <View style={{ paddingTop: 10 }}>
          <Button title="Cadastrar" onPress={this.Cadastrar} />
        </View>

      </View>
    );
  }
}

export default Cadastro;
