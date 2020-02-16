import React, { Component } from 'react';
import {
    View,
    Text,
    ProgressBarAndroid,
    Button,
    StyleSheet
} from 'react-native';
import './config/StatusBrConfig';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        padding: 15
    }
});

const { container } = styles;


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            position: 0.0,
            isValid: false
        }
    }

    renderPosition = () => {

        let state = this.state;

        state.position +=  0.1;
        this.setState(state);

        console.log(this.state.position);
        console.log(this.state.isValid);
    }

    render() {

        const position = this.state.position;

        return (
            <View style={container}>
                <ProgressBarAndroid />

                <ProgressBarAndroid styleAttr='Horizontal' />

                <ProgressBarAndroid styleAttr='Horizontal' color='green' />

                <ProgressBarAndroid
                    styleAttr='Horizontal'
                    indeterminate={false}
                    progress={ position } />

                <Button
                    title='Dispara Progress'
                    onPress={this.renderPosition.bind(this)}
                />
            </View>
        );
    }
}

export default App;
