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
import {NomNif} from './components/NomNif';

class App extends Component {
  constructor(props) {
    super(props);
    /* En esta pantalla, pretenem obtindre un objecte que contindrà
     un nom i un nif, per a un alumne, un pare i una mare */
    this.state = {
      alumne: undefined,
      pare: undefined,
      mare: undefined,
    };
  }
  /* Funcions per a actualitzar l'estat d'esta pantalla */
  actualitzaAlumne = unObjecteAlumne => {
    if (unObjecteAlumne != undefined) {
      this.setState({alumne: unObjecteAlumne});
    }
  };
  actualitzaPare = unObjectePare => {
    if (unObjectePare != undefined) {
      this.setState({pare: unObjectePare});
    }
  };
  actualitzaMare = unObjecteMare => {
    if (unObjecteMare != undefined) {
      this.setState({mare: unObjecteMare});
    }
  };

  render() {
    return (
      <View>
        <NomNif
          titol="ALUMNE"
          passaDadesAlComponentPare={this.actualitzaAlumne}
        />
        <NomNif titol="PARE" passaDadesAlComponentPare={this.actualitzaPare} />
        <NomNif titol="MARE" passaDadesAlComponentPare={this.actualitzaMare} />
        {/* Comprovació de que el component NomNif li passa un objecte adequat a l'estat */}
        {console.log('Alumne: ' + JSON.stringify(this.state.alumne))}
        {console.log('Pare: ' + JSON.stringify(this.state.pare))}
        {console.log('Mare: ' + JSON.stringify(this.state.mare))}
      </View>
    );
  }
}
const styles = StyleSheet.create({});

export default App;
