import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        input: {
            margin: 20,
            padding: 10,
            borderWidth: 1,
            borderColor: '#000000',
            heigth: 45
        },
        texto: {
            marginTop: 15,
            fontSize: 25,
            color: '#000',
            textAlign: 'center'
        }
    }
});


const { texto, input, container } = styles;


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            texto: '',
            textoInput: ''
        };

        this.enviar = this.enviar.bind();
    }

    enviar = () => {
        const { texto, textoInput } = this.state;

        texto = `Olá, seu nome é ${textoInput}`;
        this.setState({ texto });
    }

    render() {
        return (
            <View style={container}>
                <TextInput
                    style={input}
                    underlineColorAndroid="transparent"
                    placeholder="Digite o seu nome..."
                    onChangeText={(textoInput) => { this.setState({ textoInput }) }}></TextInput>
                <Button title="Pega Nome" onPress={this.enviar} />
                <Text style={texto}>{this.state.texto}</Text>
            </View>
        );
    }
}
