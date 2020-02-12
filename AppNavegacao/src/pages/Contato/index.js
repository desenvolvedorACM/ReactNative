import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class contato extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Seu nome: ${navigation.getParam('nome', '')}`,
            headerStyle: {
                backgroundColor: '#FFF'
            },
            headerTintColor: '#000'
        }
    }

    render() {
        const { nome, idade } = this.props.navigation.state.params;
        const nome1 = this.props.navigation.getParam('nome', '');

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <View style={{ padding: 12, margintop: 15, alignItems: 'flex-start' }}>

                    <Text style={{ textAlign: 'center', fontSize: 20 }}> Nome: {nome} </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}> Idade: {idade} </Text>
                </View>

                <Button title="Voltar cadastro" onPress={() => { this.props.navigation.navigate('cadastro'); }} />
            </View>
        )
    }
}

