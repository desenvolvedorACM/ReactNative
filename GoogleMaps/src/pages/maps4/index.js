import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Text
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
//import Geolocation from '@react-native-community/geolocation';


const { container, mapa, botaoLocation } = styles;


class Maps4 extends Component {

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
      }
    };

    this.getLocation = this.getLocation.bind(this);
  }

  success = ({ latitude, longitude }) => {
    console.log(latitude + longitude);
  }

  error = (error) => {
    console.error(error);
  }

  componentDidMount() {

  }

  getLocation = async () => {
    /*await Geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {
       alert(latitude);
    },
      error => Alert.alert('Erro GPs',error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });*/
  }

  render() {
    const { region } = this.state;

    return (
      <View style={container}>

        <View style={{ height: 100, padding: 10 }}>
          <TouchableOpacity
            style={botaoLocation}
            onPress={this.getLocation}>
            <Text style={{ color: '#FFF', fontSize: 18 }}>Pega localização</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <MapView
            minZoomLevel={16}
            showsUserLocation
            loadingEnabled
            style={mapa}
            region={region} />
        </View>

      </View>

    );
  }
}

export default Maps4;
