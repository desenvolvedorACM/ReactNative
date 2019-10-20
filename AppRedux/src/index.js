// Desabilitar Warning
console.disableYellowBox = true;

import React, { Component } from 'react';
import { createAppNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//import { Provider } from 'react-redux';
//import { createStore } from 'redux';

import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
//import Reducers from './src/Reducers';

//let store = createStore(Reducers);

const stackNavigator = createAppNavigator(
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
    }));

export default stackNavigator;