import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    NetInfo,
    Platform
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    botaoAnima1: {
        backgroundColor: '#225588',
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        margin: 8
    },
    botaoAnima2: {
        backgroundColor: '#223399',
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        margin: 8
    },
    botaoAnima3: {
        backgroundColor: '#999999',
        width: '100%',
        height: 50,
        borderRadius: 15,
        justifyContent: 'center',
        margin: 8
    },
    texto: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center'
    },
    header: {
        width: '100%',
        height: 65,
        backgroundColor: '#2233DD',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerPrincipal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12
    }
});

const { container, botaoAnima1, botaoAnima2, botaoAnima3, texto, header, containerPrincipal } = styles;

class App extends Component {

    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#559000'
        },
        headerTintColor: '#FFF'
    }

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={container}>
                <View style={header}>
                    <Text style={texto}>Estudando animações</Text>
                </View>

                <View style={containerPrincipal}>
                    <TouchableOpacity style={botaoAnima1} onPress={() => this.props.navigation.navigate('Pagina1')}>
                        <Text style={texto}>Animação 1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={botaoAnima2} onPress={() => this.props.navigation.navigate('Pagina2')}>
                        <Text style={texto}>Animação 2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={botaoAnima3} onPress={() => this.props.navigation.navigate('Pagina3')}>
                        <Text style={texto}>Animação 3</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default App;

