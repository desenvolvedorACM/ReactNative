import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class cadastro extends Component {

    /*static navigationOptionss = {
        title: 'Cadastro'
    }*/

    static navigationOptions = () => {
        return {
            title: 'Cadastro',
            headerStyle: {
                backgroundColor: '#FFF'
            },
            headerTintColor: '#000'
        }
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 12 }}>
                <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 12 }}> TELA DE CADASTRO </Text>
                <Button title="Início" onPress={() => { this.props.navigation.popToTop() }} />
            </View>
        );
    }
}

export default cadastro;
