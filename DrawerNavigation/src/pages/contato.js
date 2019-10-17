import React from 'react';
import { View, Text, Button,Image } from 'react-native';


const Contato = ({ navigation }) => (
    <View style={{ flex: 1, backgroundColor: '#CC5566', padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text> Pagina Contato </Text>
        <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
);

Contato.navigationOptions = {
    drawerLabel: 'Contato-inicio',
    drawerIcon: ({ tintColor }) => (
        <Image source={require('../img/contato_ativo.png')}
            style={[{ width: 30, height: 30 }, { tintColor: tintColor }]} />
    )
}

export default Contato;
