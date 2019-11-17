import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Container,
} from './styles';
import Api from '../../services/api';
import Loader from '../../components/loading';


class Grafic extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Text>Grafic</Text>
            </Container>
        );
    }
}

export default Grafic;
