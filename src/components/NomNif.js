/**
 * Template React Native App
 * @author Manel Viel
 * @version 1.0
 * @format
 * @class
 * @summary Classe que conté un Nom i un Dni
 */

import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Nif} from './Nif';

export class NomNif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: undefined,
      nif: undefined,
    };
  }

  actualitzaNom = unNom => {
    this.setState({nom: unNom});
    if (this.state.nif != undefined) {
      this.props.passaDadesAlComponentPare({nom: unNom, nif: this.state.nif});
    }
  };

  funcioComunica = ({dni, lletra}) => {
    this.setState({nif: dni + lletra});
    if (this.state.nom != undefined) {
      this.props.passaDadesAlComponentPare({
        nom: this.state.nom,
        nif: dni + lletra,
      });
    }
  };

  render() {
    return (
      <View>
        <Nif titol={this.props.titol} comunicaFillPare={this.funcioComunica} />
        <TextInput
          placeholder={this.props.titol}
          onChangeText={this.actualitzaNom}
        />
        <Text>
          he rebut {this.state.nom} {this.state.nif}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({});
