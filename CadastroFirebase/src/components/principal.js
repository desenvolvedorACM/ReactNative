import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import firebase from '../config/firebaseConnection';



class Principal extends Component {
    constructor(props) {
        super(props);

        this.state = { lista: [] };
    }

    componentWillMount() {
        let usuarios = firebase.database().ref('usuarios');
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

    render() {
        return (
            <View style={styles.sectionContainer}>
                <FlatList
                    data={this.state.lista}
                    renderItem={({ item }) => <Listagem data={item} />} />
            </View>
        );
    }
}

export default Principal;


class Listagem extends Component {
    render() {
        return (
            <View>
                <Text>{ this.props.data.nome}</Text>
                <Text>{ this.props.data.cargo}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        padding: 10
    },
    sectionHeader: {
        backgroundColor: '#CDCDCD',
        height: 60
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#DAA520'
    }
});
