import React, { Component } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import styles from './styles';


/*
SP: -23.5492243 -465813785
DF: -15.8080374 -47.8750231
CG: -20.4695225 -54.6016767
*/


const { container, mapa, header } = styles;

class Maps2 extends Component {
  static navigationOptions = {
    title: 'Eexmplo de mapas1',
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
          pinColor: '#FF8800',
          coords: {
            latitude: -29.9152058,
            longitude: -51.1953909
          }
        },
        {
          key: 1,
          pinColor: '#FF0000',
          coords: {
            latitude: -29.9103665,
            longitude: -51.1873926
          }
        },
        {
          key: 2,
          pinColor: '#CC86FF',
          coords: {
            latitude: -29.9233413,
            longitude: -51.1892164
          }
        },
        {
          key: 3,
          pinColor: '#896600',
          coords: {
            latitude: -29.8958584,
            longitude: -51.1786755
          }
        }
      ]
    };

    this.moveCidade = this.moveCidade.bind(this);
    this.mudouMapa = this.mudouMapa.bind(this);
    this.onRegionChange = this.onRegionChange.bind(this);
    this.adicionaMarcador = this.adicionaMarcador.bind(this);
  }

  onRegionChange(region) {
    let state = this.state;
    state.regionText = `${region.latitude} | ${region.longitude}`;

    this.setState({ region });
  }

  mudouMapa = (region) => {
    let state = this.state;
    state.regionText = `${region.latitude} | ${region.longitude}`;

    state.region = {
      latitude: region.latitude,
      longitude: region.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }

    this.setState(state);
  }

  moveCidade = (lat, long) => {

    let state = this.state;
    let regionAlterada = {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

    state.region = regionAlterada;
    this.setState(state);
  }

  posicaoAtual = () => {

  }

  getInitialState() {
    return {
      region: {
        latitude: -29.9152058,
        longitude: -51.1953909,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
    };
  }

  adicionaMarcador = (event) => {
    let state = this.state;

    state.markers.push(
      {
        key: state.markers.length,
        coords: {
          latitude: event.nativeEvent.coordinate.latitude,
          longitude: event.nativeEvent.coordinate.longitude
        },
        pinColor: '#FF0000'
      }
    );
    this.setState(state);
  }

  render() {
    const { region, regionText, markers } = this.state;
    let localizacaoAtual = `Minha localização atual: ${region.latitude} | ${region.longitude}`;

    return (

      <View style={container}>
        <View style={header}>
          <Text style={{ fontSize: 25, color: '#000' }}>Projeto mapas</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button title='São Paulo' onPress={() => { this.moveCidade(-23.5492243, - 465813785) }}></Button>
          <Button title='Brasília' onPress={() => { this.moveCidade(-15.8080374, - 47.8750231) }}></Button>
          <Button title='Campo Grande' onPress={() => { this.moveCidade(-20.4695225, - 54.6016767) }}></Button>
          <Button title='Posição atual' onPress={this.posicaoAtual}></Button>
        </View>


        <View style={{ borderRadius: 15, backgroundColor: '#000', padding: 12, borderColor: '#000', borderWidth: 1 }}>
          <Text style={{ fontSize: 15, color: '#FFF' }}>Posição Atual: {regionText}</Text>
        </View>

        <MapView
          style={mapa}
          mapType="standard"
          showsUserLocation={true}
          loadingEnabled={true}
          zoomEnabled={true}
          showsTraffic={true}
          onPress={this.adicionaMarcador}
          /*onMapReady={()=> { }}*/
          /*onRegionChangeComplete={this.mudouMapa}
          onRegionChange={this.onRegionChange} */
          region={this.state.region}>
          {
            markers.map((marker) => {
              return (
                <Marker key={marker.key} title='Titulo: ' description={localizacaoAtual} pinColor={marker.pinColor}
                  coordinate={marker.coords} />
              )
            })
          }

          <Circle
            fillColor='rgba(255,0,0, 0.3)'
            center={{
              latitude: -29.9152058,
              longitude: -51.1953909
            }}
            radius={3500} />
        </MapView>

      </View>

    );
  }
}

export default Maps2;
