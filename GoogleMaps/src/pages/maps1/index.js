import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import styles from './styles';


const { container, mapa } = styles;


class Maps1 extends Component {

  static navigationOptions = {
    title: 'Personalização de markers',
    headerStyle: {
      backgroundColor: '#8877EE'
    },
    headerTintColor: '#FFF',
  }

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -29.9152058,
        longitude: -51.1953909,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      regionText: '',
      markers: [
        {
          key: 0,
          image: require('../../assets/carro.png'),
          coords: {
            latitude: -29.9152058,
            longitude: -51.1953909
          }
        },
        {
          key: 1,
          image: require('../../assets/carro_down.png'),
          coords: {
            latitude: -29.9103665,
            longitude: -51.1873926
          }
        },
        {
          key: 2,
          image: require('../../assets/carro_left.png'),
          coords: {
            latitude: -29.9233413,
            longitude: -51.1892164
          }
        },
        {
          key: 3,
          image: require('../../assets/carro_right.png'),
          coords: {
            latitude: -29.8958584,
            longitude: -51.1786755
          }
        }
      ]
    };

  }



  render() {
    const { region, markers } = this.state;

    return (

      <View style={container}>

        <MapView
          style={mapa}
          mapType="standard"
          showsUserLocation={true}
          loadingEnabled={true}
          zoomEnabled={true}
          showsTraffic={true}
          region={region}>
          {
            markers.map((marker) => <Marker key={marker.key} image={marker.image} coordinate={marker.coords} />)
          }

          <Circle
            fillColor='rgba(138,43,226, 0.3)'
            center={{
              latitude: -29.9152066,
              longitude: -51.1953909
            }}
            radius={3000} />
        </MapView>

      </View>

    );
  }
}

export default Maps1;
