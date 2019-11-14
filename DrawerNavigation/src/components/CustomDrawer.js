import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { DrawerItems } from 'react-navigation';


const CustomDrawer = props => (
    <View style={{ flex: 1 }}>
        <View style={{ width: '100%', height: 75, marginTop: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../img/perfil.png')} style={{ width: 65, height: 65 }} />
            <Text style={{ fontSize: 18, marginTop: 6, color: '#FFF' }}> Bem vindo alexandre</Text>
        </View>

        <ScrollView style={{ marginTop: 15 }}>
            <DrawerItems {...props} />
        </ScrollView>

        <View style={{ marginTop: 20, width: '100%' }}>
            <TouchableOpacity
                style={{ backgroundColor: '#666555' }}
                underlineColor="transparent"
                onPress={() => { this.props.navigation.navigate('Contato'); }}>
                <Text style={{ margin: 10, color: '#FFF', textAlign: 'center' }}>Contato</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default CustomDrawer;

