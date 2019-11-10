import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  Text
} from 'react-native';
import MapView from 'react-native-maps';
import styles from './styles';
import Geolocation from '@react-native-community/geolocation';
import { getPixel } from '../../config/utils';
import MapViewDirections from 'react-native-maps-directions';


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
      region: null,
      destLocation: null
    };

    this.getLocation = this.getLocation.bind(this);
  }

  success = ({ latitude, longitude }) => {
    console.log(latitude + longitude);
  }

  error = (error) => {
    console.error(error);
  }

  async componentDidMount() {
     await getLocation();
  }

  getLocation = async () => {
    await Geolocation.getCurrentPosition(async ({ coords: { latitude, longitude } }) => {

      this.setState({
        region: {
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }
      });

      this.setState({
        destLocation: {
          latitude: -29.9102964,
          longitude: -51.1823962
        }
      });

    },
      error => Alert.alert('Erro GPs', error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
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
            region={region} >


            {this.state.destLocation &&
              <MapViewDirections
                origin={this.state.region}
                destination={this.state.destLocation}
                apikey="AIzaSyDJCb_MWqmlaeY0O6IPfqeQ9E7zNnelTS"
                strokeWidth={5}
                strokeColor="#000"
                onReady={result => {
                  this.map.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: getPixel(50),
                      left: getPixel(50),
                      top: getPixel(50),
                      bottom: getPixel(50)
                    }
                  })
                }}
              />

            }
          </MapView>
        </View>

      </View>

    );
  }
}

export default Maps4;
