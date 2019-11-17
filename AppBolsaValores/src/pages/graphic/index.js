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

        this.state = {
            symbol: '',
            errorMessage: ''
        };
    }

    componentDidMount() {
        this.TimeSeriesItraday();
    }

    TimeSeriesItraday = async () => {
        try {

            const symbol = this.props.navigation.state.params.metaData['2. Symbol'];

            if (symbol != '') {
                const response = await Api.get(`query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=OQ7UMDJVYN6QE14Q`);
                const { ...MetaData } = response.data["Meta Data"];
                const { ...timeSeries } = response.data["Time Series (5min)"];

                const timeSeriesArray = Object.values(timeSeries);
                console.log(timeSeries);
            }

        } catch (error) {
            this.setState({ errorMessage: error });
            console.log(this.state.errorMessage);
        }
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
