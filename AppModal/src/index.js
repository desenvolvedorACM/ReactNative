import React, { Component } from 'react';
import {
    Modal,
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
} from 'react-native';
import ModalEntrar from './components/modal';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDD',
        padding: 12
    },
    botao: {
        backgroundColor: '#000055',
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center'
    },
    textoBotao: {
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center'
    },
    modalcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
});

const { container, modalcontainer, botao, textoBotao } = styles;

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = { modalVisible: false };
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    entrar = () => {
        this.setModalVisible(true);
    }

    sair = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={container}>

                <TouchableOpacity style={botao}
                    onPress={this.entrar}>
                    <Text style={textoBotao}>Abrir Modal</Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>

                    <View style={modalcontainer}>
                        <ModalEntrar fechar={() => { this.sair(false); }} />
                    </View>
                </Modal>

            </View>
        );
    }
}