import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center" }}>

                <View style={{ margin: 50, alignItems: 'center' }}>
                    <Image source={require('../../assets/profile.png')} />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}> TELA PROFILE </Text>
                </View>
            </View>
        );
    }
}

