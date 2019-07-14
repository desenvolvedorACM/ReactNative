import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';


export default class CustomModal extends Component {

    render() {
        return (
            <View style={{ backgroundColor: '#DD6666', width: '100%', height: 300, borderRadius: 10, padding: 10 }}>
                <Text style={{ color: '#FFF', fontSize: 25, textAlign: 'center', marginTop: 10 }}>Seja bem vindo</Text>

                <Button title="Sair" onPress={ this.props.onFechar } />
            </View>
        );
    }
}
