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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  actualitzaText = elContingutDelTextInput => {
    this.setState({text: elContingutDelTextInput});
  };
  render() {
    return (
      <View>
        <Text>Nom (en minúscules):</Text>
        <TextInput
          onChangeText={this.actualitzaText}
          value={this.state.text}
          placeholder="Escriu el nom en minúscules"
          keyboardType="default"
        />
        <Text>Nom (en Majúscules):{this.state.text.toUpperCase()}</Text>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
