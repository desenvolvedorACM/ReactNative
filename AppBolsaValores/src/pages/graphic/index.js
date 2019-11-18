import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {
    Container,
    TextLow,
    TextHigh
} from './styles';
import Api from '../../services/api';
import { AreaChart, StackedBarChart, StackedAreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape'


class Grafic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            symbol: '',
            errorMessage: '',
            timeSeries: []
        };
    }

    componentDidMount() {
        this.TimeSeriesItraday();
    }

    TimeSeriesItraday = async () => {
        try {

            const symbol = this.props.navigation.state.params.metaData['2. Symbol'];
            const listItems = [];

            if (symbol != '') {
                const response = await Api.get(`query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=OQ7UMDJVYN6QE14Q`);
                const { ...MetaData } = response.data["Meta Data"];
                const { ...timeSeries } = response.data["Time Series (5min)"];

                Object.values(timeSeries).map(item => {
                    listItems.push({
                        high: item['2. high'],
                        low: item['3. low'],
                    });

                });

                this.setState({timeSeries: [...listItems] });
                console.log(this.state.timeSeries);
            }

        } catch (error) {
            this.setState({ errorMessage: error });
            console.log(this.state.errorMessage);
        }
    }

    render() {

        const colors = ['#7b4173', '#de9ed6']
        const keys = ['high', 'low']

        return (
            <Container>
                <TextLow>LOW</TextLow>
                <TextHigh>HIGH</TextHigh>

                <StackedAreaChart
                    style={{ height: 250, paddingVertical: 10 }}
                    data={ this.state.timeSeries }
                    keys={keys}
                    colors={colors}
                    showGrid={true}
                />

                <Grid />
            </Container>
        );
    }
}

export default Grafic;
