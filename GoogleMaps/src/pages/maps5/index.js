import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import { getPixel } from '../../config/utils';
import MapViewDirections from 'react-native-maps-directions';

const { container, mapa, localView, localButton, localText, box } = styles;
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
      region: {
        latitude: -29.9152058,
        longitude: -51.1953909,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      destLocation: null
    };

  }


  render() {
    const { region, origin, destination } = this.state;

    return (

      <View style={container}>

        <MapView
          ref={(map)=>{this.map = map}}
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
            //latitude:-20.4634685,longitude:-54.6108303
            //latitude:-20.4615409,longitude:-54.5919008
          }

          <Marker coordinate={region} title='Rua machado assis, 91' description="Teste" />

        </MapView>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={box}>
          <View style={localView}>
            <TouchableOpacity style={localButton} onPress={() => {
              this.setState({
                destLocation: {
                  latitude: -29.9102964,
                  longitude: -51.1823962
                }
              });
            }}>
              <Text style={localText}>Shopping canoas</Text>
            </TouchableOpacity>
          </View>
          <View style={localView}>
            <TouchableOpacity style={localButton}>
              <Text style={localText}>Shopping poa</Text>
            </TouchableOpacity>
          </View>
          <View style={localView}>
            <TouchableOpacity style={localButton}>
              <Text style={localText}>Shopping poa</Text>
            </TouchableOpacity>
          </View>
          <View style={localView}>
            <TouchableOpacity style={localButton}>
              <Text style={localText}>Shopping poa</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

    );
  }
}

export default Maps5;
