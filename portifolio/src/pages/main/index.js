import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image
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
    container,
    image,
    cardProfile,
    cardInfo,
    userInfo,
    name } = styles;
    
import SocialHeader from '../../components/socialHeader';
import Loading from '../../components/loading';


class Main extends Component {

    static navigationOptions = {
        title: 'Meus Projetos'
    }

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            projects: [],
            loading: false
        };
    }

    componentDidMount() {
        this.loadProjects();
    }

    loadProjects = async () => {
        this.setState({ loading: true });
        try {
            const response = await Api.get('/projects');
            console.log(response);

            this.setState({ projects: [...response.data] });

            this.setState({ loading: false });
        } catch (error) {
            this.setState({ loading: false });
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
        if (this.state.loading) {
            return (
                <Loading />
            )
        } else {
            return (
                <View style={container}>

                    <View style={cardProfile}>
                        <Image style={image}
                            source={require('../../assets/user.png')} />

                        <SocialHeader navigation={ this.props.navigation } />

                        <View>
                            <Text style={name}>Alexandre Marques</Text>
                            <View style={cardInfo}>
                                <Text style={userInfo}>Desenvolvedor mobile</Text>
                                <Text style={userInfo}>Idade: 38 anos</Text>
                            </View>
                        </View>
                    </View>


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
}

export default Main;
