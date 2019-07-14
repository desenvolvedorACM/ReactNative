import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
  Modal,
  TouchableOpacity
} from 'react-native';

import CustomModal from './modal';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CDCDCD',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const { container } = styles;


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    }

    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this);
  }

  entrar() {
    let state = this.state;
    state.modalVisible = true;

    this.setState(state);
  }

  sair(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={container}>
        <StatusBar backgroundColor="#DDEE44" barStyle="dark-content" />

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', padding: 10 }}>
          <TouchableOpacity onPress={this.entrar} style={{ borderRadius: 10,flex: 1, height: 40, color: '#000', backgroundColor: '#5566EE' }}>
            <Text style={{ textAlign: 'center', color: '#FFF', fontSize: 25 }}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', margin: 15 }}>
            <CustomModal onFechar={() => this.sair(false)} />
          </View>
        </Modal>
      </View>
    );
  }
}
