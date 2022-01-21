/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class
 * @summary Classe Per a calcular la lletra d'un DNI
 */

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {lletresNIF, calculaLletraNif} from '../utils/Utils';

export class Nif extends Component {
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
    } else {
      this.actualitzaLletra('');
    }
  };

  actualitzaLletra = unaPossibleLletra => {
    this.setState({lletra: unaPossibleLletra});
  };

  calculs = unDni => {
    if (unDni.length === 8) {
      let lletraCalculada = calculaLletraNif(unDni);
      this.actualitzaLletra(lletraCalculada);
      this.props.comunicaFillPare({dni: unDni, lletra: lletraCalculada});
    }
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 25}}>DNI {this.props.titol}:</Text>
        <TextInput
          style={{fontSize: 25}}
          placeholder={'dni ' + this.props.titol}
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
    );
  }
}
const styles = StyleSheet.create({});
