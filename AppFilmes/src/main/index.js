import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    SafeAreaView
} from 'react-native';
import Api from '../services/Api';
import Filme from '../components/Filme';
import Loading from '../components/Loading';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    header: {
        height: 60,
        backgroundColor: '#007F88',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 25,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

const { container, header, headerText } = styles;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filmes: [],
            errorMessage: '',
            loading: true
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
            this.setState({ loading: false })

        } catch (error) {
            this.setState({ errorMessage: `Erro: ${error}` });
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <SafeAreaView style={container}>
                    <View style={header}>
                        <Text style={headerText}> Filmes recomendados </Text>
                    </View>

                    <FlatList
                        data={this.state.filmes}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item }) => <Filme data={item} />}
                    />
                </SafeAreaView>
            );
        }

    }
}

export default App;
