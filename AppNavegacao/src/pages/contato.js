import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class contato extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Contato - ' + navigation.getParam('nome', 'Alex'),
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#FFF'
        }
    }

    render() {
        const { nome, idade } = this.props.navigation.state.params;
        return (
            <View style={{ flex: 1, backgroundColor: '#DDFF66', padding: 10 }}>
                <View style={{ padding: 12, margintop: 15, alignItems: 'flex-start'}}>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}> contato </Text>

                    <Text style={{ textAlign: 'center', fontSize: 20 }}> Nome: {nome} </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}> Idade: {idade} </Text>

                </View>
                
                <Button title="Cadastro" onPress={() => { this.props.navigation.navigate('cadastro'); }} />
            </View>
        )
    }
}

