import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import MapView from 'react-native-maps';
import './config/StatusBarConfig';

console.disableYellowBox = true;


/*
SP: -23.5492243 -465813785
DF: -15.8080374 -47.8750231
CG: -20.4695225 -54.6016767
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  mapa: {
    width: '100%',
    height: 550
  },
  header: {
    height: 60,
    width: '100%',
    backgroundColor: '#CDCD66',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15
  }
});

const { container, mapa, header } = styles;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: -29.9139526,
        longitude: -51.2027975,
        latitudeDelta: 0.0922,
        longitudeDeelta: 0.0421,
      }
    };

    this.moveCidade = this.moveCidade.bind(this);
  }

  moveCidade = (lat, long) => {

    let state = this.state;
    let regionAlterada = {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDeelta: 0.0421,
    }

    state.region = regionAlterada;
    this.setState(state);
  }

  render() {
    const { region } = this.state;

    return (

      <View style={container}>
        <View style={header}>
          <Text style={{ fontSize: 20, color: '#000' }}>Projeto mapas</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Button title='São Paulo' onPress={() => { this.moveCidade(-23.5492243 - 465813785) }}></Button>
          <Button title='Brasília' onPress={() => { this.moveCidade(-15.8080374 - 47.8750231) }}></Button>
          <Button title='Campo Grande' onPress={() => { this.moveCidade(-20.4695225 - 54.6016767) }}></Button>
        </View>

        <Text style={{ fontSize: 15, color: '#000' }}>{region.latitude} |{region.longitude}</Text>

        <MapView
          style={mapa}
          region={this.region} />

      </View>

    );
  }
}

export default App;
