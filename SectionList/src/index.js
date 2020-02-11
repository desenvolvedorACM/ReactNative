import React, { Component } from 'react';
import {
    View,
    Text, StyleSheet, SectionList
} from 'react-native';
import '../src/config/StatusBarConfig';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    sectionHeaderText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFF'
    },
    sectionHeader: {
        backgroundColor: '#8055FF',
        alignItems: 'center',
        height: 50,
        justifyContent: 'center'
    },
    sectionHeaderTitleText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF'
    },
    sectionHeaderTitle: {
        backgroundColor: '#5566EE',
        padding: 15
    },
    itemRow: {
        padding: 5,
        height: 50,
        fontSize: 15
    }
});


const {
    container,
    sectionHeader,
    sectionHeaderText,
    sectionHeaderTitle,
    sectionHeaderTitleText,
    itemRow
} = styles;


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avangers: [
                {
                    title: 'Heróis',
                    data: ['Homem de ferro', 'Hulk', 'Thor', 'Capitão America', 'Homem aranha']
                },
                {
                    title: 'Vilões',
                    data: ['Loki', 'Ultron', 'Thanos', 'Venom', 'Duende verde']
                }
            ]
        }
    }


    renderItemHeader = (section) => (
        <View style={sectionHeaderTitle}>
            <Text style={sectionHeaderTitleText}>{section.title}</Text>
        </View>
    )


    renderItem = (item) => (
        <Text style={itemRow}>{item}</Text>
    )

    render() {
        return (
            <View style={container}>

                <View style={sectionHeader}>
                    <Text style={sectionHeaderText}>AVANGERS</Text>
                </View>

                <SectionList
                    sections={this.state.avangers}
                    renderItem={({ item }) => this.renderItem(item)}
                    renderSectionHeader={({ section }) => this.renderItemHeader(section)}
                    keyExtractor={(item, index) => index} />
            </View>
        );
    }


}
