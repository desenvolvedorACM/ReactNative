import React, { Component } from 'react';
import {
    SafeAreaView,
    View,
    Text
} from 'react-native';
import './config/StatusBarConfig';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SafeAreaView>
                <View>
                    <Text> idex </Text>
                </View>
            </SafeAreaView>
        );
    }
}

