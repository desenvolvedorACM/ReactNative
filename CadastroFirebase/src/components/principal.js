import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    YellowBox,
    Button,
    Alert
} from 'react-native';

import firebase from '../config/firebaseConnection';
import styles from '../config/styles';
import { Actions } from 'react-native-router-flux';

class Listagem extends Component {
    render() {
        return (
            <View style={styles.sectionLista}>
                <Text>Nome: {this.props.data.nome}</Text>
                <Text>Cargo: {this.props.data.cargo}</Text>
            </View>
        );
    }
}

class Principal extends Component {
    constructor(props) {
        super(props);

        this.state = { lista: [] };
    }

    componentDidMount() {
        this.carregaUsuarios();
    }

    carregaUsuarios() {
        let state = this.state;
        state.lista = [];

        firebase.database().ref('usuarios').on('value', (snapshot) => {
            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.val().key,
                    nome: childItem.val().nome,
                    cargo: childItem.val().cargo
                });
            });

            this.setState(state);
        });
    }

    Deslogar() {
        firebase.auth().signOut()
            .then(resp => {
                Alert.alert('Aviso', `Usuário deslogado com sucesso!`);
                Actions.formLogin();
            }).catch(error => {
                Alert.alert('Erro', `Error Cod. ${error.code}`);
            });
    }

    render() {
        return (
            <View style={styles.sectionContainerP}>

                <View style={styles.sectionHeaderP}>
                    <Text style={styles.sectionTitleP}>Lista de usuários - {this.state.lista.length}</Text>
                    <Button title="Deslogar" onPress={this.Deslogar} />
                </View>

                <FlatList
                    data={this.state.lista}
                    renderItem={({ item }) => <Listagem data={item} />} />
            </View>
        );
    }
}

export default Principal;

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
]);


