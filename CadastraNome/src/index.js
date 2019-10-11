import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button, Alert
} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center'
    },
    input: {
        margin: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: '#000000',
        height: 45
    },
    texto: {
        marginTop: 15,
        fontSize: 25,
        color: '#000',
        textAlign: 'center'
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
        let state = this.state;

        if (state.textoInput === '') {
            Alert.alert('App', 'Preencha o campo nome');
        } else {
            state.texto = `Olá, seu nome é ${state.textoInput}`;
            this.setState(state); 
        }
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
