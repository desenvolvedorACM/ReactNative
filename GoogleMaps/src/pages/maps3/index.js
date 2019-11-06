import React, { Component } from 'react';
import {
  View
} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import styles from './styles';
import Pin from '../../components/pin';


const { container, mapa } = styles;


class Maps3 extends Component {
  static navigationOptions = {
    title: 'Personalização de mapas',
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
          aviso: 'Tranquilo',
          pinColor: '#32CD32',
          coords: {
            latitude: -29.9152058,
            longitude: -51.1953909
          }
        },
        {
          key: 1,
          aviso: 'Cuidado',
          pinColor: '#FF0000',
          coords: {
            latitude: -29.9103665,
            longitude: -51.1873926
          }
        },
        {
          key: 2,
          aviso: 'Tranquilo',
          pinColor: '#32CD32',
          coords: {
            latitude: -29.9233413,
            longitude: -51.1892164
          }
        },
        {
          key: 3,
          aviso: 'Alerta',
          pinColor: '#FF8C00',
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
            markers.map((marker) =>
              <Marker key={marker.key} coordinate={marker.coords} >
                <Pin pinColor={marker.pinColor} aviso={marker.aviso} />
              </Marker>
            )
          }

          <Circle
            fillColor='rgba(255,255,0, 0.4)'
            center={{
              latitude: -29.9152058,
              longitude: -51.1953909
            }}
            radius={2500} />
        </MapView>

      </View>

    );
  }
}

export default Maps3;
