import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TextInput,
    Alert,
    TouchableOpacity
} from 'react-native';
import * as firebase from "firebase";
import { Listagem } from './components/Listagem';
import './config/StatusBarConfig';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#000',
        marginBottom: 10,
        borderRadius: 10
    },
    texto: {
        fontSize: 18,
        color: '#000',
        marginBottom: 10
    },
    containerButton: {
        flexDirection: 'row',
        height: 40
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6495ED',
        height: 50,
        margin: 9,
        padding: 15,
        borderRadius: 9
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 15
    }
});

const { container, textInput, texto, containerButton, botao, textoBotao } = styles;

console.disableYellowBox = true;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            nome: '',
            cargo: ''
        };

        this.configFireBase();
    }

    componentDidMount() {
        this.listaRegistros();
    }

    listaRegistros = () => {
        firebase.database().ref('usuarios').on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];

            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    nome: childItem.val().nome,
                    cargo: childItem.val().cargo
                });
            });

            this.setState(state);
        });
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

    cadastrarFuncionario = () => {
        if (this.state.nome === '' || this.state.cargo === '') {
            Alert.alert('Aviso', 'É necessário preencher todos os campos');
        } else {
            let usuarios = firebase.database().ref('usuarios');
            usuarios.push({
                nome: this.state.nome,
                cargo: this.state.cargo
            });

            Alert.alert('Aviso', 'Funcionário(a) cadastrado com sucesso!');

            let state = this.state;
            state.nome = '';
            state.cargo = '';
            this.setState(state);
        }
    }

    render() {
        return (
            <View style={container}>
                <View style={{ backgroundColor: '#FFD700', alignItems: 'center', padding: 15 }}>
                    <Text style={texto}>Cadastro no FireBase</Text>
                </View>
                <View style={{ padding: 13 }}>
                    <Text style={texto}>Nome</Text>
                    <TextInput
                        style={textInput}
                        underlineColorAndroid="transparent"
                        placeholder="informe o seu nome"
                        onChangeText={(nome) => this.setState({ nome })}
                        value={this.state.nome} />

                    <Text style={texto}>Cargo</Text>
                    <TextInput
                        placeholder="informe o seu cargo..."
                        style={textInput}
                        underlineColorAndroid="transparent"
                        value={this.state.cargo}
                        onChangeText={(cargo) => this.setState({ cargo })} />
                    <Text style={texto}>Total funcionários: {this.state.lista.length} </Text>

                    <View style={containerButton}>
                        <TouchableOpacity
                            style={botao}
                            onPress={this.cadastrarFuncionario}><Text style={textoBotao}>Novo funcionário</Text></TouchableOpacity>
                        <TouchableOpacity
                            style={botao}
                            onPress={this.cadastrarFuncionario}><Text style={textoBotao}>Ver funcionários</Text></TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

export default App;
