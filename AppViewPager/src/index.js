import React, { Component } from 'react';
import {
    View,
    Text,
    ViewPagerAndroid,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
});

const { viewPager, pageStyle } = styles;

class App extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ViewPagerAndroid
                style={viewPager}
                initialPage={0}>
                <View style={pageStyle} key="1">
                    <Text>First page</Text>
                </View>
                <View style={pageStyle} key="2">
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

export default App;
