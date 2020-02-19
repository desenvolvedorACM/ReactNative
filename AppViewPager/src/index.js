import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import ViewPagerAndroid from '@react-native-community/viewpager';
import './config/StatusBarConfig';


const styles = StyleSheet.create({
    viewPagerContainer: {
        flex: 1
    },
    pager: {
        flex: 1,
        padding: 10
    }
});

const {
    viewPagerContainer,
    pager
} = styles;

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <ViewPagerAndroid style={viewPagerContainer}
                initialPage={0}
                showPageIndicator={false}
                orientation="horizontal"
                transitionStyle="curl">

                <Image source={require('../src/assets/slider1.png')} />
                <Image source={require('../src/assets/slider2.png')} />
                <Image source={require('../src/assets/slider3.png')} />
                <Image source={require('../src/assets/slider4.png')} />

            </ViewPagerAndroid>
        );
    }
}

export default App;
