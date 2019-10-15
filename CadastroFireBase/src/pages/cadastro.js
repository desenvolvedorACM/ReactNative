import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import * as firebase from "firebase";
import '../config/StatusBarConfig';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    input: {
        height: 50,
        backgroundColor: '#CCC',
        padding: 5,
        fontSize: 18,
        borderRadius: 12
    },
    texto: {
        fontSize: 15,
        color: '#000',
        margin: 10,
        fontWeight: 'bold'
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#658686',
        marginTop: 15,
        padding: 25,
        borderRadius: 9
    },
    textoBotao: {
        fontSize: 15,
        color: '#FFF'
    }
});

const { container, input, texto, botao, textoBotao } = styles;

console.disableYellowBox = true;

class Cadastro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: ''
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.configFireBase();
    }


    configFireBase = () => {
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyC45sr-O5jNp5aLruMWkZwXwY4UVtTPdJU",
            authDomain: "meuapp-7beb4.firebaseapp.com",
            databaseURL: "https://meuapp-7beb4.firebaseio.com",
            projectId: "meuapp-7beb4",
            storageBucket: "meuapp-7beb4.appspot.com",
            messagingSenderId: "472416385671",
            appId: "1:472416385671:web:1fb0039e0cd80a85"
        };

        if (!firebase.apps.length) {
            // Initialize Firebase
            firebase.initializeApp(firebaseConfig);
        }

    }

    cadastrar = () => {
        if (this.state.email == '') {
            Alert.alert('FireBase', 'É necessário informar o seu e-mail');
        } else {
            firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
                .catch((err) => {
                    if (err.code == 'auth/weak-password') {
                        Alert.alert('FireBase', 'Sua senha deve ter 6 caracteres.');
                    } else {
                        Alert.alert('FireBase', `Código Erro: ${err.code}`);
                    }
                });
        }
    }

    render() {
        return (
            <View style={container}>
                <View style={{ backgroundColor: '#666699', alignItems: 'center', padding: 10 }}>
                    <Text style={texto}>Cadastro no FireBase</Text>
                </View>
                <View style={{ padding: 13 }}>
                    <Text style={texto}>E-Mail</Text>
                    <TextInput
                        style={input}
                        underlineColorAndroid="transparent"
                        placeholder="informe o seu email"
                        onChangeText={(email) => this.setState({ email })}
                        value={this.state.email} />

                    <Text style={texto}>Senha</Text>
                    <TextInput
                        placeholder="informe sua senha..."
                        style={input}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        value={this.state.senha}
                        onChangeText={(senha) => this.setState({ senha })} />

                    <TouchableOpacity
                        style={botao}
                        onPress={this.cadastrar}>
                        <Text style={textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Cadastro;
