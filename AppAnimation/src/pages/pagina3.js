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
        title: 'Pagina 3',
        headerStyle: {
            backgroundColor: '#2233DD'
        },
        headerTintColor: '#FFF'
    };

    constructor(props) {
        super(props);
        this.state = {
            widthAnimation: new Animated.Value(150),
            heightAnimation: new Animated.Value(35),
        };

        Animated.loop(
            Animated.sequence([
                Animated.timing(
                    this.state.widthAnimation,
                    {
                        toValue: 400,
                        duration: 1000
                    }
                ),
                Animated.timing(
                    this.state.heightAnimation,
                    {
                        toValue: 60,
                        duration: 1000
                    }
                ),
                Animated.timing(
                    this.state.widthAnimation,
                    {
                        toValue: 150,
                        duration: 1000
                    }
                )
            ])
        ).start();
    }

    render() {
        return (
            <View style={container}>
                <Animated.View style={{
                    width: this.state.widthAnimation,
                    height: this.state.heightAnimation,
                    backgroundColor: '#4169E1',
                    justifyContent: 'center',
                    borderRadius: 25
                }}>
                    <Text style={{ fontSize: 20, color: '#FFF', textAlign: 'center' }}> Carregando... </Text>
                </Animated.View>
            </View>
        );
    }
}

export default App;
