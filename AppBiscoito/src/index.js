import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import './config/StatusBarConfig';


class Botao extends Component {
    constructor(props) {
        super(props);

        this.styles = StyleSheet.create({
            botao: {
                width: 370,
                height: 50,
                backgroundColor: '#dd7b22',
                borderRadius: 25
            },
            btnArea: {
                flex: 1,
                flexDirection: `row`,
                justifyContent: 'center',
                alignItems: 'center'
            },
            btnTexto: {
                fontSize: 18,
                fontWeight: 'bold',
                color: props.cor
            }
        });
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.botao} onPress={this.props.onClick}>
                <View style={this.styles.btnArea}>
                    <Text style={this.styles.btnTexto}>Gerar Frase</Text>
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    textoFrase: {
        color: '#dd7b22',
        fontStyle: 'italic',
        fontSize: 20,
        margin: 30,
        textAlign: 'center'
    },
    img: {
        width: 300,
        height: 300
    }
});


const { container, textoFrase, img } = styles;

const imageBiscoito = require('./assets/biscoito.png');


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textoFrase: '',
            error: ''
        }

        this.geraFrase = this.geraFrase.bind();
        this.carregaFrases();
    }

    carregaFrases = () => {
        this.frases = [
            'Duas coisas são infinitas: o universo e a estupidez humana. Mas, em relação ao universo, ainda não tenho certeza absoluta.',
            'No meio da dificuldade encontra-se a oportunidade.',
            'Não tentes ser bem-sucedido, tenta antes ser um homem de valor.',
            'Se os fatos não se encaixam na teoria, modifique os fatos.'
        ]
    }

    geraFrase = () => {
        try {
            let state = this.state;
            let numeroFrase = Math.floor(Math.random() * this.frases.length);

            state.textoFrase = this.frases[numeroFrase];
            this.setState(state);
        } catch (error) {
            this.setState({ error: error })
        }
    }

    render() {
        return (
            <View style={container}>

                <Image source={ imageBiscoito } style={ img } />

                <Botao cor="#FFF" onClick={this.geraFrase} />

                <Text style={textoFrase}>{this.state.textoFrase}</Text>
            </View>
        )
    }
}

