import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Api from '../../services/api';
import styles from './styles';

const {
    projectContainer,
    projectTitle,
    list,
    projecButton,
    projectText,
    projectDescription,
    container } = styles;

class Main extends Component {

    static navigationOptions = {
        title: 'Meus Projetos'
    }

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            projects: []
        };
    }

    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = async () => {
        try {
            const response = await Api.get('/projects');
            console.log(response);

            this.setState({ projects: [...response.data] });
        } catch (error) {
            this.setState({ error: error });
        }
    }

    renderItem = ({ item }) => (
        <View style={projectContainer}>
            <Text style={projectTitle}>{item.title}</Text>
            <Text style={projectDescription} numberOfLines={3}>{item.description}</Text>
            <TouchableOpacity style={projecButton} onPress={() => { this.props.navigation.navigate('Project', { project: item }) }}>
                <Text style={projectText}>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={container}>
                <FlatList
                    data={this.state.projects}
                    keyExtractor={item => `${item.id}`}
                    renderItem={this.renderItem}
                    contentContainerStyle={list}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

export default Main;
