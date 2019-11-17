import React, { Component } from 'react';
import {
    FlatList,
    Picker,
    Text,
    Animated,
    View
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
    TextViewGraphic
} from './styles';
import Api from '../../services/api';
import Loader from '../../components/loading';


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
            widthAnimation: new Animated.Value(80),
            heightAnimation: new Animated.Value(10),
            opAnimada: new Animated.Value(0),
        };

        this.listCompanies = this.listCompanies.bind(this);
        this.SearchTimeSeriesDaily = this.SearchTimeSeriesDaily.bind(this);
        this.pickerValueSelected = this.pickerValueSelected.bind(this);
        this.LoadAnimation = this.LoadAnimation.bind(this);
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

            const response = await Api.get(`/query?function=TIME_SERIES_DAILY&symbol=${this.state.selectSymbol}&apikey=OQ7UMDJVYN6QE14Q`);
            const { ...MetaData } = response.data["Meta Data"];
            const { ...timesDaily } = response.data["Time Series (Daily)"];

            const dataArray = Object.values(timesDaily);
            const keys = Object.keys(timesDaily);

            this.setState({
                timesSeries: [...dataArray]
            });

            console.log(this.state.timesSeries);

        } catch (error) {
            this.setState({ error });
            console.log(error);
        }
    }

    pickerValueSelected = async (itemValue) => {
        console.log(itemValue);
        this.setState({ selectSymbol: itemValue });

        await this.SearchTimeSeriesDaily();
    }

    renderItem = ({ item }) => {
        console.log(item);
        const high = parseInt(item['2. high']).toFixed(2);
        const low = parseInt(item['3. low']).toFixed(2);

        return (
            <ContainerItemFlatList>

                <Text>HIGH: {high}</Text>
                <Text>LOW: {low}</Text>
                <ContainerVolume>
                    <TextVolume>VOLUME: {item['5. volume']}</TextVolume>
                </ContainerVolume>

                <ButtonViewGraphic onPress={() => { this.props.navigation.navigate('Grafic', { grafic: item }) }}>
                    <TextViewGraphic>Gerar grafico</TextViewGraphic>
                </ButtonViewGraphic>

            </ContainerItemFlatList>
        )
    }


    render() {

        let companiesPicker = this.state.companies.map((itemValue, itemKey) => (
            <Picker.Item key={itemKey}
                value={itemValue['1. symbol']}
                label={itemValue['2. name']}>{itemValue['2. name']}</Picker.Item>
        ))

        return (
            <Container>

                <ContainerPicker>
                    <PickerEmpresa
                        selectedValue={this.state.selectSymbol}
                        onValueChange={(itemValue, itemIndex) =>
                            this.pickerValueSelected(itemValue)}>

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
                        keyExtractor={item => item.id}
                    />
                </ContainerList>

            </Container>
        );
    }
}

export default Main;
