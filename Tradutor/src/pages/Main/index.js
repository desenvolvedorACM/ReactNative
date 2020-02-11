import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

console.disableYellowBox = true;

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { texto: '' };

    }

    render() {
        return (
            <View style={{ padding: 10, flex: 1, backgroundColor: '#6699CD' }}>
                <View style={{ marginTop: 20 }}>
                    <TextInput
                        style={{
                            height: 50,
                            fontSize: 18,
                            borderRadius:
                                8, borderColor: '#000', backgroundColor: '#FFF'
                        }}
                        placeholder='Digite aqui para traduzir...'
                        onChangeText={(texto) => this.setState({ texto })}
                    />
                    <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 30 }}>
                        {this.state.texto.split(' ').map(palavra => palavra ? '🍕' : '')}
                    </Text>
                </View>
            </View>
        );
    }
}

