import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Conversor from './components/Conversor';
import './config/StatusBarConfig';

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
                <View style={{ 
                    width: '100%', 
                    height: 70, 
                    backgroundColor: '#7B68EE', 
                    justifyContent: 'center', 
                    alignItems: 'center'}}>
                    <Text style={{ 
                        color: '#FFF', 
                        textAlign: 'center', 
                        fontSize: 25,
                        justifyContent: 'center',
                        alignItems: 'center'}}>Conversor moedas</Text>
                </View>
                <Conversor moedaA="USD" moedaB="BRL" />
                <Conversor moedaA="EUR" moedaB="BRL"  />
            </View>
        );
    }
}

