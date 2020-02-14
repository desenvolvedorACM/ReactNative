import React, { Component } from 'react';
import { View, Text, Image, Button, TouchableHighlight } from 'react-native';

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
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}> TELA INICIAL </Text>
                </View>

                <View style={{ margin: 20 }}>
                    <TouchableHighlight
                        onPress={() => { this.props.navigation.toggleDrawer(); }}
                        style={{ padding: 10, height: 50, backgroundColor: '#6655EE', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>Menu</Text>
                    </TouchableHighlight>

                    <Button title='Pagina Profile' onPress={() => { this.props.navigation.navigate('Profile'); }} />
                </View>

            </View>
        );
    }
}

