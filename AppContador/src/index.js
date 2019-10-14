import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00aeef'
    },
    timer: {
        marginTop: -160,
        color: '#FFFFFF',
        fontSize: 72,
        fontWeight: 'bold',
    },
    btnArea: {
        flexDirection: 'row',
        marginTop: 70,
        height: 40
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        height: 40,
        margin: 17,
        borderRadius: 9
    },
    btnTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#00aeef'
    }
});


const { container, btnArea, timer, botao, btnTexto } = styles;
const img = require('../src/assets/cronometro.png');

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numero: 0,
            botao: 'VAI'
        };

        //variavel do timer do relogio
        this.timer = null;

        this.bindFunctions();
    }

    bindFunctions = () => {
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai() {
        let state = this.state;

        if (this.timer != null) {

            //Aqui vai parar o timer
            clearInterval(this.timer);
            this.timer = null;

            state.botao = "VAI";

        } else {

            // Comeca girar o timer!
            this.timer = setInterval(() => {
                let state = this.state;
                state.numero += 0.1;
                this.setState(state);
            }, 100);

            state.botao = "PARAR";
        }

        this.setState(state);
    }

    limpar() {

        if (this.timer != null) {

            //Aqui vai parar o timer
            clearInterval(this.timer);
            this.timer = null;
        }

        let state = this.state;
        state.numero = 0;
        state.botao = "VAI";
        this.setState(state);

    }

    render() {

        return (
            <View style={container} >

                <Image source={ img } />

                <Text style={timer} >{this.state.numero.toFixed(1)}</Text>

                <View style={btnArea}>

                    <TouchableOpacity style={botao} onPress={this.vai} >
                        <Text style={styles.btnTexto}>{this.state.botao}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={botao} onPress={this.limpar} >
                        <Text style={btnTexto}>LIMPAR</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );

    }

}


