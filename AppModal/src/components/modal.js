import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';


const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: '#836FFF',
        width: '100%',
        height: 200,
        borderRadius: 15,
        padding: 20
    },
    modalTexto: {
        fontSize: 25,
        color: '#000',
        textAlign: 'center'
    }
});


const { containerModal, modalTexto } = styles;

class ModalEntrar extends Component {
    render() {
        return (
            <View style={containerModal}>
                <Text style={modalTexto}>Seja bem-vindo modal!</Text>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Button title='Sair' onPress={this.props.fechar} />
                </View>
            </View>
        )
    }
}


export default ModalEntrar;
