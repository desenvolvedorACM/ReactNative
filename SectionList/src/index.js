import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet, SectionList
} from 'react-native';
import '../src/config/StatusBarConfig';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionContainer: {
        flex: 1,
        height: 80,
        borderWidth: 1,
        borderColor: '#808080',
        backgroundColor: '#DDD',
        borderRadius: 5,
        margin: 10,
        padding: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    sectionText: {
        fontSize: 14,
        color: '#000'
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000'
    },
    sectionHeader: {
        backgroundColor: '#8055FF',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    sectionHeaderTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        backgroundColor: '#EEEE55',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2
    }
});


const {
    container,
    sectionContainer,
    sectionText,
    sectionHeader,
    sectionHeaderText
} = styles;


export default class App extends Component {
    constructor(props) {
        super(props);


        this.state = {
            listaAgenda: [
                {
                    title: 'Alexandre Marques',
                    data: [
                        {
                            id: 1,
                            nome: 'Alexandre',
                            email: 'teste@teste.com'
                        },
                        {
                            id: 1,
                            nome: 'Alexandre',
                            email: 'teste@teste.com'
                        }
                    ]
                },
                {
                    title: 'Daiane Marques',
                    data: [
                        {
                            id: 1,
                            nome: 'Angelita da silva',
                            email: 'teste@teste.com'
                        },
                        {
                            id: 1,
                            nome: 'Ilse de oliveria',
                            email: 'teste@teste.com'
                        }
                    ]
                },
                {
                    title: 'Vanessa Silva',
                    data: [
                        {
                            id: 1,
                            nome: 'Angelita da silva',
                            email: 'teste@teste.com'
                        },
                        {
                            id: 1,
                            nome: 'Ilse de oliveria',
                            email: 'teste@teste.com'
                        }
                    ]
                }
            ]
        }
    }


    renderItemHeader = ({ item }) => (
        <Text style={sectionHeaderTitle}>Titulo: {item.title}</Text>
    )

    renderItem = ({ item }) => (
        <View style={sectionContainer}>
            <Text style={sectionText}>NOME: {item.nome}</Text>
            <Text style={sectionText}>EMAIL: {item.email}</Text>
        </View>
    )

    render() {
        return (
            <View style={container}>

                <View style={sectionHeader}>
                    <Text style={sectionHeaderText}>SECTIONLIST</Text>
                </View>

                <SectionList
                    sections={this.state.listaAgenda}
                    renderItem={({ item }) => this.renderItem(item)}
                    renderSectionHeader={({ section }) => this.renderItemHeader(item)}
                    keyExtractor={(item, index) => index} />
            </View>
        );
    }


}
