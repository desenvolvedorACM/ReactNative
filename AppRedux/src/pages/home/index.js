import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import styles from './styles';


export default class Home extends Component {

    static navigationOptions = {
        title: null,
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {}

        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
    }

    cadastrar() {
        this.props.navigation.navigate('Login');
    }

    logar() {
        this.props.navigation.navigate('Cadastro');
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={this.cadastrar}>
                    <Text style={styles.btnTxt}>Fazer Login</Text>
                </TouchableHighlight>
                
                <TouchableHighlight underlayColor="#CCCCCC" style={styles.botao} onPress={this.logar}>
                    <Text style={styles.btnTxt}>Cadastrar</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

