import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import styles from './styles';
import Api from '../../services/api';

const { Container } = styles;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
       this.load
    }

    render() {
        return (
            <Container>
                <Text>TESTE</Text>
            </Container>
        );
    }
}

export default Main;
