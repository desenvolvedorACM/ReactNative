import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated
} from 'react-native';
import '../config/StatusBarConfig';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const { container } = styles;

class App extends Component {
    
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            widthAnimation: new Animated.Value(300),
            heightAnimation: new Animated.Value(300),
            opacidade: new Animated.Value(1)
        };

        Animated.sequence([
            Animated.timing(
                this.state.opacidade,
                {
                    toValue: 0.6,
                    duration: 1500
                }
            ),

            Animated.parallel([
                Animated.timing(
                    this.state.heightAnimation,
                    {
                        toValue: 100,
                        duration: 2000
                    }
                ),
                Animated.timing(
                    this.state.widthAnimation,
                    {
                        toValue: 150,
                        duration: 2000
                    }
                )
            ]),
            Animated.timing(
                this.state.widthAnimation,
                {
                    toValue: 300,
                    duration: 800
                }
            )
        ]).start();

        /*Animated.timing(
            this.state.heightAnimation,
            {
                toValue: 60,
                duration: 1000
            }
        ).start();*/
    }

    render() {
        return (
            <View style={container}>
                <Animated.View style={{
                    width: this.state.widthAnimation,
                    height: this.state.heightAnimation,
                    backgroundColor: '#4169E1',
                    justifyContent: 'center', alignItems: 'center',
                    borderRadius: 10,
                    opacity: this.state.opacidade
                }}>
                    <Text style={{ fontSize: 22, color: '#FFF', textAlign: 'center' }}> Carregando... </Text>
                </Animated.View>
            </View>
        );
    }
}

export default App;
