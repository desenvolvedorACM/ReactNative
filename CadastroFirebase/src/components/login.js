import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    Image,
    ToastAndroid,
    Alert,
    StyleSheet
} from 'react-native';

import firebase from '../config/firebaseConnection';
import { Actions } from 'react-native-router-flux';


const img = require('../assets/firebase-logo.png');

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = { email: '', senha: '' };
        this.Logar = this.Logar.bind();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                Alert.alert('Autenticação', 'Usuário logado!');
            }
        });
    }


    Logar = () => {
        try {

            if (this.state.email != '' || this.state.senha != '') {
                firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
                    .then(resp => {
                        Actions.Principal();
                    }).catch(error => {
                        if (error.code == 'auth/wrong-password') {
                            Alert.alert('Autenticação', 'Senha incorreta!');
                        } else {
                            Alert.alert('Ops', `Tente novamente mais tarde.`);
                        }
                    });
            } else {
                ToastAndroid.showWithGravity(
                    'Preencha os campos Email e Senha',
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
            <View style={styles.sectionContainer}>

                <View>
                    <Image source={img} style={styles.img} />
                </View>

                <TextInput
                    placeholder="E-mail"
                    style={styles.input}
                    placeholderTextColor='#000'
                    underlineColorAndroid="transparent"
                    onChangeText={(email) => { this.setState({ email }); }} />

                <TextInput
                    secureTextEntry={true}
                    placeholder="Senha"
                    placeholderTextColor='#000'
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={(senha) => { this.setState({ senha }); }} />

                <View style={{ paddingTop: 10, flex: 1, flexDirection: 'row', margin: 10 }}>
                    <Button title="Logar" onPress={this.Logar} />
                    <Button title="Cadastrar" onPress={Actions.formCadastro()} />
                </View>

            </View>
        );
    }
}

export default Login;


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
        backgroundColor: '#FFDD66',
        fontSize: 18,
        margin: 5,
        padding: 5,
        borderRadius: 20,
        color: '#000',
        borderColor: '#808080'
    },
    img: {
        height: 100,
        width: 380
    }
});