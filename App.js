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
      text: '',
      dni: '',
      lletraNif: '',
    };
  }

  actualitzaText = elContingutDelTextInput => {
    this.setState({text: elContingutDelTextInput});
  };

  actualitzaDNI = unDni => {
    this.setState({dni: unDni});
  };

  actualitzaLletraNif = unaLletraNif => {
    this.setState({lletraNif: unaLletraNif});
  };

  verificaNif = unDni => {
    this.actualitzaDNI(unDni);
    if (unDni.length === 8) {
      this.actualitzaLletraNif(calculaLletraNif(unDni));
    } else {
      this.actualitzaLletraNif('');
    }
  };
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>DNI:</Text>
          <TextInput
            onChangeText={this.verificaNif}
            value={this.state.dni}
            placeholder="Escriu el DNI"
            keyboardType="numeric"
            underlineColorAndroid="blue"
            maxLength={8}
          />
          <TextInput
            value={this.state.lletraNif}
            placeholder="Lletra"
            editable={false}
            underlineColorAndroid="blue"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
