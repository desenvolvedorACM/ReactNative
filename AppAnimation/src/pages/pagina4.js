import React, { Component } from 'react';
import {
    View,
    Animated
} from 'react-native';

class Pagina4 extends Component {


    static navigationOptions = {
        title: 'Pagina 3',
        headerStyle: {
            backgroundColor: '#559000'
        },
        headerTintColor: '#FFF'
    };

    constructor(props) {
        super(props);
        this.state = {
            larguraAnimada: new Animated.Value(0)
        };

        this.realizaAnimacao();
    }

    realizaAnimacao = () => {
        Animated.sequence([
            Animated.timing(
                this.state.larguraAnimada,
                {
                    toValue: 100,
                    duration: 3000
                }
            )
        ]).start();
    }

    render() {

        let percentualInterpolacao = this.state.larguraAnimada.interpolate(
            {
                inputRange: [0, 100],
                outputRange: ['0%', '100%']
            }
        )

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                padding: 12
            }}>

                <Animated.View
                    style={{
                        backgroundColor: '#4169E1',
                        width: percentualInterpolacao,
                        height: 50
                    }}></Animated.View>

            </View>
        );
    }
}

export default Pagina4;
