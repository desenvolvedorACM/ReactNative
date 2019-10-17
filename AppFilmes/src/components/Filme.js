import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    ImageBackground
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


const { container } = styles;


class Filme extends Component {

    render() {
        return (
            <View style={container} >
                <TouchableHighlight
                    onPress={() => alert("Filme: " + this.props.data.nome)}
                    underlayColor="blue" >

                    <ImageBackground
                        resizeMode="cover"
                        source={{ uri: this.props.data.foto }}
                        style={{ height: 150 }}>

                        <View style={{
                            flex: 1,
                            alignItems: 'flex-start',
                            justifyContent: 'flex-end',
                            paddingLeft: 10,
                            paddingBottom: 10
                        }}>
                            <Text style={{ fontSize: 23, color: '#FFFFFF', fontWeight: 'bold' }}>{this.props.data.nome}</Text>
                        </View>
                    </ImageBackground>

                </TouchableHighlight>
            </View>
        );
    }
}

export default Filme;
