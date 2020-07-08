import React, { Component } from 'react';
import {
    Container,
    TextLow,
    TextHigh
} from './styles';
import Api from '../../services/api';
import {  StackedAreaChart, Grid } from 'react-native-svg-charts';
import Loading from '../../components/loading';


class Grafic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            symbol: '',
            errorMessage: '',
            timeSeries: [],
            loading: false
        };
    }

    componentDidMount() {
        this.TimeSeriesItraday();
    }

    TimeSeriesItraday = async () => {
        try {

            const symbol = this.props.navigation.state.params.metaData['2. Symbol'];
            const listItems = [];

            this.setState({ loading: true });

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

                this.setState({ timeSeries: [...listItems] });
                this.setState({ loading: false });
            }

        } catch (error) {
            this.setState({ errorMessage: error });
            console.log(this.state.errorMessage);
            this.setState({ loading: false });
        }
    }

    render() {

        const colors = ['#de9ed6','#7b4173']
        const keys = ['high', 'low']

        if (this.state.loading) {
            return (<Loading title="Aguarde, gerando grafico..." />)

        } else {
            return (
                <Container>
                    <TextHigh>HIGH</TextHigh>
                    <TextLow>LOW</TextLow>

                    <StackedAreaChart
                        style={{ height: 250, paddingVertical: 10 }}
                        data={this.state.timeSeries}
                        keys={keys}
                        colors={colors}
                        showGrid={true}
                    />

                    <Grid />
                </Container>
            );
        }
    }
}

export default Grafic;
