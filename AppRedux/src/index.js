// Desabilitar Warning
console.disableYellowBox = true;

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Reducers from './Reducers';

let store = createStore(Reducers);

const Navegador = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home
        },
        Cadastro: {
            screen: Cadastro
        },
        Login: {
            screen: Login
        }
    }, {
        mode: 'modal',
        headerStyle: {
            backgroundColor: '#CDCDCD'
        },
        headerTintColor: '#CD0066'
    }));


export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navegador />
            </Provider>
        );
    }
}


