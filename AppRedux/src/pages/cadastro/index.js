import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput,
    Button
} from 'react-native';

import { connect } from 'react-redux';
import { editEmail, editSenha } from '../../actions/AuthAction';
import styles from './styles';


export class Cadastro extends Component {

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

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar() {

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
                        onChangeText={(email) => this.props.editEmail(email)} />

                    <Text style={styles.nomeInput}>Senha:</Text>
                    <TextInput
                        value={this.props.senha}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true} style={styles.input}
                        onChangeText={(senha) => this.props.editSenha(senha)} />

                    <Button title="Cadastrar" onPress={this.cadastrar} />
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

export default connect(mapStateToProps, { editEmail, editSenha })(Cadastro);

