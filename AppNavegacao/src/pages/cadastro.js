import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class cadastro extends Component {
    static navigationOptions = () => {
        return {
            title: 'Cadastro'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 12 }}>
                <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 12 }}> cadastro </Text>
                <Button title="Voltar inicio" onPress={() => { this.props.navigation.popToTop() }} />
            </View>
        );
    }
}

export default cadastro;
