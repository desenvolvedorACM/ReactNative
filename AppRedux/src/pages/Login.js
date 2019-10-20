import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

import { connect } from 'react-redux';
import { editEmail, editSenha } from '../actions/AuthAction';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    nomeInput: {
        color: '#000000',
        fontSize: 24,
        marginBottom: 5
    },
    input: {
        color: '#000000',
        height: 50,
        backgroundColor: '#CCCCCC',
        padding: 5,
        marginBottom: 10,
        borderRadius: 10
    }
});


export class Login extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Login',
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#FFF'
        }
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

                <View style={{ padding: 20 }}>
                    <Text style={styles.nomeInput}>Email:</Text>
                    <TextInput
                        value={this.props.email}
                        underlineColorAndroid="transparent"
                        style={styles.input}
                        onChangeText={(email) => this.props.editEmail(email)}
                    />

                    <Text style={styles.nomeInput}>Senha:</Text>
                    <TextInput
                        value={this.props.senha}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={(senha) => this.props.editSenha(senha)}

                    />

                    <Button title="Entrar" onPress={this.entrar} />
                </View>

            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        senha: state.auth.senha
    };
};

export default connect(mapStateToProps, { editEmail, editSenha })(Login);
