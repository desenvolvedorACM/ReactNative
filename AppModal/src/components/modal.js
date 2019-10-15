import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const styles = StyleSheet.create({
    modal: {
        backgroundColor: '#FF6666',
        width: '100%',
        height: 200,
        borderRadius: 15,
        padding: 15
    },
    modalTexto: {
        fontSize: 25,
        color: '#000',
        textAlign: 'center'
    }
});


const { modal, modalTexto } = styles;

class ModalEntrar extends Component {


    render() {
        return (
            <View style={modal}>
                <Text style={modalTexto}>Seja bem-vindo modal!</Text>

                <Button title='Sair' onPress={ this.props.fechar } />
            </View>
        );
    }
}

export default ModalEntrar;
