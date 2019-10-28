import React, { Component } from 'react';
import {
    StyleSheet,
    View,

} from 'react-native';
import Conversor from './components/Conversor';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//  https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={styles.container}>
                <Conversor moedaA="USD" moedaB="BRL" />
            </View>
        );
    }
}

