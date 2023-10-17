/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';


function App(): JSX.Element {

  const [numero, setNumero] = useState(0);

  function handleNumero() {
    const newNumber = Math.floor(Math.random() * 1001);
    setNumero(newNumber);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
      backgroundColor: '#FF0000',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    numero: {
      fontSize: 38,
      fontWeight: 'bold',
      color: '#FFF',
    },

    botao: {
      backgroundColor: '#FFF',
      width: '80%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: 15,
    },
});

export default App;
