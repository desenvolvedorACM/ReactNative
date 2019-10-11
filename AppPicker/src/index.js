import React, { Component } from 'react';
import {
    View,
    Text,
    Picker,
    Switch,
    Slider,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerPicker: {
        flex: 1,
        backgroundColor: '#cdccdc',
        color: '#000'
    },
    containerSlider: {
        flex: 1,
        backgroundColor: '#FFF566',
        color: '#000'
    },
    containerSwitch: {
        flex: 1,
        backgroundColor: '#88DDFF',
        color: '#000'
    },
    textoResultado: {
        fontSize: 35,
        color: 'red',
        textAlign: 'center'
    },
    textoHeader: {
        fontSize: 30,
        color: '#000',
        marginTop: 10,
        textAlign: 'center'
    }
});

console.disableYellowBox = true;

const { container, containerPicker, textoResultado, containerSlider, textoHeader, containerSwitch } = styles;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzaSelecionada: 0,
            valor: 0,
            status: false,
            pizzas: [
                { nome: 'Strogonoff', valor: 39.90 },
                { nome: 'Jardineira', valor: 15 },
                { nome: 'Quatro queijos', valor: 20.90 },
                { nome: 'Calabresa', valor: 19.90 }
            ]
        };
    }

    mudaStatus = (valorSwith) => {
        this.setState({ status: valorSwith })
    }

    render() {

        let componentPicker = this.state.pizzas.map((item, chave) => {
            return <Picker.Item key={chave} value={chave} label={item.nome} />
        });

        return (
            <View style={container}>
                <View style={containerPicker}>
                    <Text style={textoHeader}>Exemplo de picker</Text>
                    <Picker
                        selectedValue={this.state.pizzaSelecionada}
                        onValueChange={(itemValue, itemIndex) => this.setState({ pizzaSelecionada: itemValue })}>
                        {componentPicker}
                    </Picker>
                    <Text style={textoResultado}>R$ {this.state.pizzas[this.state.pizzaSelecionada].valor.toFixed(2)}</Text>
                </View>
                <View style={containerSlider}>
                    <Text style={textoHeader}>Exemplo de slider</Text>

                    <Slider
                        minimumValue={0}
                        maximumValue={120}
                        onValueChange={(valorSlider) => this.setState({ valor: valorSlider })}
                        value={this.state.valorSlider} />

                    <Text style={textoResultado}>Sua idade é: {this.state.valor.toFixed(0)}</Text>
                </View>
                <View style={containerSwitch}>
                    <Text style={textoHeader}>Exemplo de Switch</Text>

                    <Switch
                        value={this.state.status}
                        thumbTintColor="#000"
                        onTintColor="#FF0"
                        onValueChange={this.mudaStatus} />

                    <Text style={textoResultado}>{this.state.status ? 'Ativo' : 'Inativo'}</Text>
                </View>
            </View >
        );
    }
}

export default App;
