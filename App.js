/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class
 * @summary Classe base per a iniciar una app en React Native
 */

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {ContenidorExercicis} from './components/contenidorExercicis/ContenidorExercicis';
import {lletresNIF, calculaLletraNif} from './utils/Utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dni: '',
      lletra: '',
    };
  }

  actualitzaDni = unPossibleDNi => {
    this.setState({dni: unPossibleDNi});
    if (unPossibleDNi.length === 8) {
      this.calculs(unPossibleDNi);
    }
  };

  actualitzaLletra = unaPossibleLletra => {
    this.setState({lletra: unaPossibleLletra});
  };

  calculs = unDni => {
    if (unDni.length === 8) {
      this.actualitzaLletra(calculaLletraNif(unDni));
    }
  };

  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 25}}>DNI:</Text>
          <TextInput
            style={{fontSize: 25}}
            placeholder="Escriu el DNI"
            keyboardType="numeric"
            underlineColorAndroid="blue"
            maxLength={8}
            onChangeText={this.actualitzaDni}
          />
          <TextInput
            style={{fontSize: 25, color: 'blue'}}
            value={this.state.lletra}
            placeholder="Lletra"
            editable={false}
            maxLength={1}
            underlineColorAndroid="blue"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
