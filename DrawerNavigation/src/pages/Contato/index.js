import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './styles';

const { container } = styles;

const Contato = ({ navigation }) => (
    <View style={container}>
        <Text> Pagina Contato </Text>
        <Button
            title="Home"
            onPress={() => navigation.navigate('Home')} />
    </View>
);

Contato.navigationOptions = {
    drawerLabel: 'Contato-inicio',
    drawerIcon: ({ tintColor }) => (
        <Image
            source={require('../img/contato_ativo.png')}
            style={[{ width: 30, height: 30 }, { tintColor: tintColor }]} />
    )
}

export default Contato;
