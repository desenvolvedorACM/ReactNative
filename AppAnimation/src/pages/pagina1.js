import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableOpacity,
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const { container } = styles;

class Pagina1 extends Component {

    static navigationOptions = {
        title: 'Pagina 1 - Estudando animações',
        headerStyle: {
            backgroundColor: '#559000'
        },
        headerTintColor: '#FFF'
    };

    constructor(props) {
        super(props);
        this.state = {
            widthAnimation: new Animated.Value(150),
            heightAnimation: new Animated.Value(35),
            opAnimada: new Animated.Value(0),
        };

        this.carregarGrafico = this.carregarGrafico.bind(this);
    }

    carregarGrafico = () => {

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
                    toValue: 300,
                    duration: 1000
                }
            )
        ]).start();
    }

    render() {
        return (
            <View style={container}>
                <View style={{
                    height: 70,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#4168E1'
                }}>

                    <TouchableOpacity onPress={this.carregarGrafico}>
                        <Text style={{ fontSize: 28, color: '#FFF' }}>Gerar Grafico</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>

                    <Animated.View style={{
                        width: this.state.widthAnimation,
                        height: this.state.heightAnimation,
                        backgroundColor: '#FF0000',
                        justifyContent: 'center',
                        opacity: this.state.opAnimada
                    }}>
                        <Text style={{ fontSize: 20, color: '#FFF', textAlign: 'center' }}>R$ 150,00</Text>
                    </Animated.View>
                </View>
            </View >
        );
    }
}

export default Pagina1;
