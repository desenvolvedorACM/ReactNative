import React, { Component } from 'react';
import {
    Modal,
    View,
    Button,
    StyleSheet
} from 'react-native';
import ModalEntrar from './components/modal';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDD'
    },
    modal: {
        backgroundColor: '#DDDD55',
        width: '100%',
        height: 400
    },
    modalTexto: {
        fontSize: 25,
        color: '#000'
    }
});

const { container } = styles;

export default class App extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={container}>

                <Button title='Abrir Modal' onPress={() => { this.setModalVisible(true) }} />

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}>

                    <View style={{ margin: 15, flex: 1, padding: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <ModalEntrar fechar={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }} />
                    </View>
                </Modal>

            </View>
        );
    }
}