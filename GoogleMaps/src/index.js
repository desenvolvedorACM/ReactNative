import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import './config/StatusBarConfig';

console.disableYellowBox = true;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (

      <View>

        <MapView
          style={{ width: '100%', height: '100%' }}
          initialRegion={{
            latitude: -29.9139526,
            longitude: -51.2027975,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} />
      </View>

    );
  }
}

export default App;
