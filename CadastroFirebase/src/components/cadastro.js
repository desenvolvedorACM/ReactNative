import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ToastAndroid,
  Alert,
  StyleSheet
} from 'react-native';


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
          'All Your Base Are Belong To Us',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        );
      }
    } catch (error) {
      Alert.alert('Erro', `Algum erro gerado. ${error}`);
    }
  }

  render() {
    return (
      <View style={styles.sectionContainer}>

        <View>
          <Image source={img} style={styles.img} />
        </View>

        <TextInput
          placeholder="E-mail"
          style={styles.input}
          placeholderTextColor='#fff'
          underlineColorAndroid="transparent"
          onChangeText={(email) => { this.setState({ email }); }} />

        <TextInput
          secureTextEntry={true}
          placeholder="Senha"
          placeholderTextColor='#fff'
          style={styles.input}
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


const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 10,
    paddingTop: 20,
    justifyContent: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#CDCDCD'
  },
  sectionHeader: {
    flex: 1,
    alignItems: 'center',
    height: 60
  },
  input: {
    height: 50,
    backgroundColor: '#836FFF',
    fontSize: 18,
    margin: 5,
    padding: 5,
    borderRadius: 20,
    color: '#FFF'
  },
  img: {
    height: 100,
    width: 380
  }
});