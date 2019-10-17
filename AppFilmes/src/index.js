import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableHighlight,
    ImageBackground
} from 'react-native';
import Api from './services/Api';
import Filme from './components/Filme';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 80,
        backgroundColor: '#007F98',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold'
    }
});

const { container, header, headerText } = styles;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmes: [],
            errorMessage: ''
        };
    }

    componentDidMount() {
        this.listaFilmes();
    }

    listaFilmes = async () => {
        try {
            const response = await Api.get('rn-filmes/?api=filmes');
            console.log(response);
            this.setState({ filmes: response.data });

        } catch (error) {
            this.setState({ errorMessage: `Erro: ${error}` });
        }
    }

    render() {
        return (
            <View style={container}>
                <View style={header}>
                    <Text style={headerText}> Filmes recomendados </Text>
                </View>

                <FlatList
                    data={this.state.filmes}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => <Filme data={item} />}
                />
            </View>
        );
    }
}

export default App;
