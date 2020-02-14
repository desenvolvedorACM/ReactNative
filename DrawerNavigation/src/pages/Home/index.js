import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './styles';

const { container } = styles;

export default class Home extends Component {
    
    static navigationOptions = {
        drawerLabel: 'Home-inicio',
        drawerIcon: ({ tintColor }) => (
            <Image source={require('../../assets//home_ativo.png')}
                style={[{ width: 30, height: 30 }, { tintColor: tintColor }]} />
        )
    }

    render() {
        return (
            <View style={ container }>
                <Text> Home </Text>
                <Button title="Contato" onPress={() => this.props.navigation.navigate('Contato')} />
                <View style={{ flexDirection: 'row', margin: 5 }}>
                    <Button title="Navegar Home" onPress={() => this.props.navigation.toggleDrawer()} />
                </View>
            </View>
        )
    }
}
