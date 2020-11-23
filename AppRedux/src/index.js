// Desabilitar Warning
console.disableYellowBox = true;

import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Reducers from './combineReducers';
import Route from './route';

let store = createStore(Reducers);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Route />
            </Provider>
        );
    }
}


