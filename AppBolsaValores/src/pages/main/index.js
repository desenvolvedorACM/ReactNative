import React, { Component } from 'react';
import {
    FlatList,
    Picker,
    Animated
} from 'react-native';
import {
    Container,
    PesquisarEmpresa,
    ContainerPesquisarEmpresa,
    PickerEmpresa,
    ContainerPicker,
    ContainerItemFlatList,
    ButtonFilter,
    TitleButtonFilter,
    ContainerList,
    ContainerAnimation,
    TextVolume,
    ContainerVolume,
    ButtonViewGraphic,
    TextViewGraphic,
    TextHigh,
    TextLow,
    TextDateNow
} from './styles';
import Api from '../../services/api';
import Loader from '../../components/loading';
import moment from 'moment';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectSymbol: '',
            searchFilter: 'MSFT',
            companies: [],
            error: '',
            loading: false,
            timesSeries: [],
            metaData: null,
            widthAnimation: new Animated.Value(80),
            heightAnimation: new Animated.Value(10),
            opAnimada: new Animated.Value(0),
        };


        this.bindMethods();
    }



    componentDidMount() {
        this.listCompanies();
    }

    LoadAnimation = () => {
        Animated.sequence([
            Animated.timing(
                this.state.opAnimada,
                {
                    toValue: 0.9,
                    duration: 1500
                }
            ),
            Animated.timing(
                this.state.heightAnimation,
                {
                    toValue: 200,
                    duration: 1000
                }
            )
        ]).start();
    }

    listCompanies = async () => {
        try {

            if (this.state.searchFilter != "") {
                const response = await Api.get(`/query?function=SYMBOL_SEARCH&keywords=${this.state.searchFilter}&apikey=OQ7UMDJVYN6QE14Q`);

                this.setState({ companies: [...response.data.bestMatches] });
            } else {
                alert('Informe o nome da empresa');
            }

        } catch (error) {
            this.setState({ error });
            console.log(error);
        }
    }

    SearchTimeSeriesDaily = async () => {
        try {

            const dailyNewArray = [];

            if (this.state.selectSymbol != '') {

                console.log(`/query?function=TIME_SERIES_DAILY&symbol=${this.state.selectSymbol}&apikey=OQ7UMDJVYN6QE14Q`);

                const response = await Api.get(`/query?function=TIME_SERIES_DAILY&symbol=${this.state.selectSymbol}&apikey=OQ7UMDJVYN6QE14Q`);

                const { ...MetaData } = response.data["Meta Data"];
                const { ...timesDaily } = response.data["Time Series (Daily)"];

                const timesDailyArray = Object.values(timesDaily);
                const timesDailyKeys = Object.keys(timesDaily);


                for (let i = 0; i < timesDailyKeys.length; i++) {

                    dailyNewArray.push({
                        key: i,
                        dateNow: timesDailyKeys[i],
                        high: timesDailyArray[i]['2. high'],
                        low: timesDailyArray[i]['3. low'],
                        volume: timesDailyArray[i]['5. volume']
                    });

                }

                this.setState({ timesSeries: [...dailyNewArray] });
                //console.log(this.state.timesSeries);

            }
        } catch (error) {
            this.setState({ error });
            console.log(error);
        }
    }

    pickerValueSelected = async (itemValue, itemIndex) => {
        console.log(itemValue, itemIndex);

        this.setState({ selectSymbol: itemValue });

        await this.SearchTimeSeriesDaily();
    }

    renderItem = ({ item }) => {
        return (
            <ContainerItemFlatList>

                <TextDateNow>DATA: {moment(item.dateNow).format('DD-MM-YYYY')}</TextDateNow>
                <TextHigh>HIGH: {item.high} </TextHigh>
                <TextLow>LOW: {item.low}</TextLow>

                <ContainerVolume>
                    <TextVolume>Volume: {item.volume} </TextVolume>
                </ContainerVolume>

                <ButtonViewGraphic onPress={() => { this.props.navigation.navigate('Grafic', { metaData: this.state.metaData }) }}>
                    <TextViewGraphic>Gerar grafico</TextViewGraphic>
                </ButtonViewGraphic>

            </ContainerItemFlatList>
        )
    }

    bindMethods = () => {
        this.listCompanies = this.listCompanies.bind(this);
        this.SearchTimeSeriesDaily = this.SearchTimeSeriesDaily.bind(this);
        this.pickerValueSelected = this.pickerValueSelected.bind(this);
        this.LoadAnimation = this.LoadAnimation.bind(this);
    }

    render() {

        let companiesPicker = this.state.companies.map((itemValue, itemKey) => (
            <Picker.Item key={itemKey}
                value={itemValue['1. symbol']}
                label={itemValue['2. name']} />
        ))

        return (
            <Container>

                <ContainerPicker>
                    <PickerEmpresa
                        selectedValue={this.state.selectSymbol}
                        onValueChange={(itemValue, itemIndex) => { this.pickerValueSelected(itemValue, itemIndex) }}>

                        {
                            companiesPicker
                        }

                    </PickerEmpresa>
                </ContainerPicker>

                <ContainerPesquisarEmpresa>
                    <PesquisarEmpresa
                        underlineColorAndroid="transparent"
                        placeholder="Pesquisar empresa ex.MSFT"
                        onChangeText={(value) => { this.setState({ searchFilter: value }) }} />

                    <ButtonFilter onPress={() => this.listCompanies()}>
                        <TitleButtonFilter tamanho={15}>Filtrar empresa</TitleButtonFilter>
                    </ButtonFilter>

                </ContainerPesquisarEmpresa>

                <ContainerList>
                    <FlatList
                        data={this.state.timesSeries}
                        renderItem={this.renderItem}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => `${item.dateNow}`}
                    />
                </ContainerList>

            </Container>
        );
    }
}

export default Main;
