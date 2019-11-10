import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import { getPixel } from '../../config/utils';
import MapViewDirections from 'react-native-maps-directions';
import Geolocation from '@react-native-community/geolocation';
import ModalEntrar from '../../components/loading';


const { container, mapa, localView, localButton, localText, box, modalcontainer } = styles;
const apikey = 'AIzaSyDJCb_MWqmlaeY0O6IPfqeQ9E7zNnelTS8';

class Maps5 extends Component {

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
      destLocation: null,
      loading: false
    };

    this.getLocation = this.getLocation.bind(this);
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

      this.state.setState({ loading: false });
    },
      error => Alert.alert('Erro GPs', error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  }

  render() {
    const { region } = this.state;
    

    if (this.state.loading) {
      return (

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.loading}>

          <View style={modalcontainer}>
            <ModalEntrar fechar={() => { this.setState({ loading: false }) }} />
          </View>
        </Modal>
      )
    } else {
      
      return (

        <View style={container}>

          <MapView
            ref={(map) => { this.map = map }}
            style={mapa}
            showsUserLocation={true}
            loadingEnabled={true}
            region={region}>

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

            {
              this.state.region &&
              <Marker coordinate={region} title='Rua machado assis, 91'  />
            }

          </MapView>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={box}>
            <View style={localView}>
              <TouchableOpacity style={localButton}
                onPress={this.getLocation}>
                <Text style={localText}>Localização atual</Text>
              </TouchableOpacity>
            </View>
            <View style={localView}>
              <TouchableOpacity style={localButton}
                onPress={() => {
                  this.setState({
                    region: {
                      latitude: -29.9102964,
                      longitude: -51.1823962,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421
                    }
                  });
                }}>
                <Text style={localText}>Shopping Canoas</Text>
              </TouchableOpacity>
            </View>
            <View style={localView}>
              <TouchableOpacity style={localButton}>
                <Text style={localText}>Shopping Iguatemi</Text>
              </TouchableOpacity>
            </View>
            <View style={localView}>
              <TouchableOpacity style={localButton}
                onPress={ () => { }}>
                <Text style={localText}>Shopping praia de belas</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

      );
    }

  }
}

export default Maps5;
