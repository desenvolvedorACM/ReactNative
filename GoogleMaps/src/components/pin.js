import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    viewMarker: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        padding: 12
    },
    textoMarker: {
        color: '#FFF',
        fontSize: 8
    }
});

const { viewMarker, textoMarker } = styles;


export default class Pin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={[viewMarker, { backgroundColor: this.props.pinColor }]}>
                <Text style={textoMarker}>{this.props.aviso}</Text>
            </View>
        )
    }
}

