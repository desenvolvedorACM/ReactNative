import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>

                <View style={{ margin: 50, alignItems: 'center' }}>
                    <Image source={require('../../assets/home.png')} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold'}}> TELA INICIAL </Text>
                </View>
            </View>
        );
    }
}

