import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';


export default class CustomDrawer extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: 75, marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../img/perfil.png')} style={{ width: 65, height: 65 }} />
                    <Text style={{ fontSize: 18, marginTop: 6, color: '#FFF' }}> Bem vindo alexandre</Text>
                </View>

                <ScrollView>
                    <Text>Item1</Text>
                    <Text>Item1</Text>
                    <Text>Item1</Text>
                </ScrollView>

                <View style={{ marginTop: 20, width: '100%' }}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#666555' }}
                        underlineColor="transparent"
                        onPress={() => { }}>
                        <Text style={{ margin: 10, color: '#FFF', textAlign: 'center' }}>Contato</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
