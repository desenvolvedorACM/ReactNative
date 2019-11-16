import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import Api from '../../services/api';
import { Container} from './styles';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
