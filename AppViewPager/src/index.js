import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

const styles = StyleSheet.create({
    viewPager: {
        flex: 1
    },
    page1: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#6688FF'
    },
    page2: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#6644FF'
    }
});

const { viewPager, page1, page2} = styles;

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ViewPagerAndroid
                style={viewPager}
                initialPage={0}>
                <View style={page1} key="1">
                    <Text>First page</Text>
                </View>
                <View style={page2} key="2">
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

export default App;
