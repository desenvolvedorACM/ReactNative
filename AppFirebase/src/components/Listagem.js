import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


const styles = StyleSheet.create({
    containerListagem: {
        borderRadius: 15,
        backgroundColor: '#DDFF99'
    },
    listagemtTitulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    listagemSubTitulo: {
        fontSize: 15,
        color: '#999'
    }
});

const { containerListagem, listagemtTitulo,listagemSubTitulo } = styles;


export default class Listagem extends Component {

    render() {
        return (
            <View style={containerListagem}>
                <Text style={listagemtTitulo}>{this.props.data.nome}</Text>
                <Text style={listagemSubTitulo}>{this.props.data.cargo}</Text>
            </View>
        )
    }
}

