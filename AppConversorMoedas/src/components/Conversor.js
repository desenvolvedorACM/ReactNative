import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    Keyboard
} from 'react-native';
import Api from '../services/Api';

console.disableYellowBox = true;

export default class Conversor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0,
            errorMessage: ''
        };

        this.converter = this.converter.bind(this);
    }

    converter = async () => {
        try {
            let de_para = this.state.moedaA + '_' + this.state.moedaB
            let url = '?q=' + de_para + '&compact=ultra&apiKey=7c5ef455b88d735bc6ad'
            const response = await Api.get(url);

            console.log(response.data);
            let cotacao = response.data.USD_BRL;

            let state = this.state;
            state.valorConvertido = (cotacao * parseFloat(this.state.moedaB_valor)).toFixed(2);
            this.setState(state);

        } catch (error) {
            this.setState({ errorMessage: `Erro: ${error}` });
        }

        /*fetch(this.url)
            .then((response) => response.json())
            .then((rjson) => {
                let cotacao = rjson[de_para].val;
                let state = this.state;
                state.valorConvertido = (cotacao * parseFloat(this.state.moedaB_valor)).toFixed(2);
                this.setState(state);

            })*/

        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>{this.props.moedaA} Para BRL</Text>

                <TextInput style={styles.areaInput}
                    underlineColorAndroid="transparent"
                    placeholder={this.state.moedaA}
                    keyboardType="numeric"
                    onChangeText={(moedaB_valor) => this.setState({ moedaB_valor })}
                />

                <TouchableHighlight style={styles.botaoArea} onPress={this.converter}>
                    <Text style={styles.botaoTexto}>Converter</Text>
                </TouchableHighlight>

                <Text style={styles.valorConvertido}>{(this.state.valorConvertido == 0) ? '' : this.state.valorConvertido}</Text>

                <Text style={{
                    color: '#000', fontSize: 20, 
                    textAlign: 'center',
                    backgroundColor: '#FF0000'
                }}>{(this.state.errorMessage != '') ? this.state.errorMessage : ''}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000'
    },
    areaInput: {
        width: 280,
        height: 45,
        backgroundColor: '#CCC',
        marginTop: 15,
        textAlign: 'center',
        fontSize: 20,
        color: '#000',
        borderRadius: 5
    },
    botaoArea: {
        width: 150,
        height: 45,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    botaoTexto: {
        fontSize: 20,
        color: '#FFF'
    },
    valorConvertido: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15
    }
});
