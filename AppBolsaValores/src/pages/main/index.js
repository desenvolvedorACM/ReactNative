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
    ContainerList,
    TextVolume,
    ContainerVolume,
    ButtonViewGraphic,
    TextViewGraphic,
    TextHigh,
    TextLow,
    TextDateNow,
    ContainerDatePicker,
    TitleEmpresa,
    ButtonView,
    TitleButton
} from './styles';
import Api from '../../services/api';
import Loader from '../../components/loading';
import moment from 'moment';
import DatePicker from 'react-native-datepicker';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectSymbol: '',
            searchFilter: '',
            companies: [],
            error: '',
            loading: false,
            timesSeries: [],
            metaData: null,
            dateInit: '',
            dateEnd: '',
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
            if (this.state.searchFilter != '') {
                const response = await Api.get(`/query?function=SYMBOL_SEARCH&keywords=${this.state.searchFilter}&apikey=OQ7UMDJVYN6QE14Q`);

                this.setState({ companies: [...response.data.bestMatches] });
                this.setState({ loading: false });
            }

        } catch (error) {
            this.setState({ error });
            console.log(error);
        }
    }

    SearchTimeSeriesDaily = async () => {
        try {

            if (this.state.selectSymbol != '') {

                this.setState({ loading: true });

                const dailyNewArray = [];
                console.log(`Filter: ${this.state.selectSymbol}`);

                
                console.log(`/query?function=TIME_SERIES_DAILY&symbol=${this.state.selectSymbol}&apikey=OQ7UMDJVYN6QE14Q`);

                const response = await Api.get(`/query?function=TIME_SERIES_DAILY&symbol=${this.state.selectSymbol}&apikey=OQ7UMDJVYN6QE14Q`);
                const { ...timesDaily } = response.data["Time Series (Daily)"];
                const { ...metaData } = response.data['Meta Data'];

                this.setState({ metaData });

                const timesDailyArray = Object.values(timesDaily);
                const timesDailyKeys = Object.keys(timesDaily);

                if (timesDailyKeys.length > 0) {

                    let dateFilterInit = `${this.state.dateInit.split('-')[2]}-${this.state.dateInit.split('-')[1]}-${this.state.dateInit.split('-')[0]}`;
                    let dateFilterEnd = `${this.state.dateEnd.split('-')[2]}-${this.state.dateEnd.split('-')[1]}-${this.state.dateEnd.split('-')[0]}`;

                    const newDailyKeys = timesDailyKeys.filter(item => item >= dateFilterInit && item <= dateFilterEnd);
                    console.log(newDailyKeys);

                    for (let i = 0; i < newDailyKeys.length; i++) {

                        dailyNewArray.push({
                            key: i,
                            dateNow: timesDailyKeys[i],
                            high: timesDailyArray[i]['2. high'],
                            low: timesDailyArray[i]['3. low'],
                            volume: timesDailyArray[i]['5. volume']
                        });

                    }

                    this.setState({ timesSeries: [...dailyNewArray] });
                }

                this.setState({ loading: false });
            } else {
                alert('É necessário selecionar uma empresa');
            }
        } catch (error) {
            this.setState({ error });
            this.setState({ loading: false });
            console.log(error);
        }
    }

    pickerValueSelected = async (itemValue, itemIndex) => {
        this.setState({ selectSymbol: itemValue });
    }

    searchSymbol = async (valueSelected) => {
        this.setState({ searchFilter: valueSelected.nativeEvent.text });
        await this.listCompanies();
    }

    selectDateInit = (dateInit) => {
        this.setState({ dateInit });
    }

    selectDateEnd = (dateEnd) => {
        this.setState({ dateEnd });
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

    SearchSeriesDaily = async () => {
        await this.SearchTimeSeriesDaily();
    }

    bindMethods = () => {
        this.listCompanies = this.listCompanies.bind(this);
        this.SearchTimeSeriesDaily = this.SearchTimeSeriesDaily.bind(this);
        this.pickerValueSelected = this.pickerValueSelected.bind(this);
        this.LoadAnimation = this.LoadAnimation.bind(this);
        this.searchSymbol = this.searchSymbol.bind();
    }

    render() {
        let companiesPicker = this.state.companies.map((itemValue, itemKey) => (
            <Picker.Item key={itemKey}
                value={itemValue['1. symbol']}
                label={itemValue['2. name']} />
        ))

        if (this.state.loading) {
            return <Loader title="Aguarde, carrendo dados..." />
        } else {
            return (

                <Container>

                    <ContainerDatePicker>

                        <DatePicker
                            style={{ width: 140 }}
                            date={this.state.dateInit}
                            format="DD-MM-YYYY"
                            onDateChange={this.selectDateInit} />

                        <DatePicker
                            style={{ width: 140 }}
                            date={this.state.dateEnd}
                            format="DD-MM-YYYY"
                            onDateChange={this.selectDateEnd} />

                    </ContainerDatePicker>

                    <TitleEmpresa>Seleconar empresa</TitleEmpresa>

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
                            onChange={(value) => this.searchSymbol(value)} />

                        <ButtonView onPress={this.SearchSeriesDaily}><TitleButton>Consultar</TitleButton></ButtonView>
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
}

export default Main;
