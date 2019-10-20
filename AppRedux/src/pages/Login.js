import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

//import { connect } from 'react-redux';
//import { editEmail, editSenha } from './actions/AuthActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    nomeInput: {
        color: '#000000',
        fontSize: 24,
        marginBottom: 5
    },
    input: {
        color: '#000000',
        height: 40,
        backgroundColor: '#CCCCCC',
        padding: 5,
        width: 250,
        marginBottom: 10
    }
});


export class Login extends Component {

    static navigationOptions = {
        title: 'Login',
    }

    constructor(props) {
        super(props);
        this.state = {}

        this.entrar = this.entrar.bind(this);

    }

    entrar() {

    }


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.nomeInput}>Email:</Text>
                <TextInput value={this.props.email}
                    underlineColorAndroid="transparent"
                    style={styles.input}
                    onChangeText={() => { }}
                />

                <Text style={styles.nomeInput}>Senha:</Text>
                <TextInput value={this.props.senha}
                    underlineColorAndroid="transparent"
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={() => { }}

                />

                <Button title="Entrar" onPress={this.entrar} />

            </View>
        );
    }
}


export default Login;
