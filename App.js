import React, {useState} from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import {Text, View, StyleSheet, TextInput } from 'react-native';
import {AppLoading} from 'expo';
import {useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold}  from '@expo-google-fonts/montserrat';

import Rotas from './src/rotas';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>;
  }

  const [sabor, setSabor] = useState('');
  const [preco, setPreco] = useState('');
  const [tamanho, setTamanho] = useState('');

  const cadastro = () => {
    alert('funcionando');
  }
  
  return (
    <View style={styles.container}>
        <StatusBar 
          style= "light"
          backgroundColor= "#000"
          translucent= "{false}"
        />
        <Rotas/>

        <TextInput
          placeholder= "Sabor da marmitinha" 
          style={styles.textInput} 
          onChangeText={text=>setSabor(text)}
        />
        <TextInput 
            placeholder= "Preco da marmitinha"
            style={styles.textInput}
            onChangeText={text=>setPreco(text)}
        />

        <TextInput
          placeholder= "Tamanho da marmitinha"
          style={styles.textInput}
          onChangeText={text=> setTamanho(text)}
        />  

          <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
             <Text>CADASTRAR</Text>
          </TouchableOpacity>
               
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    width: '100%',
    height: 50,
    backgroundColor:'#DEB887',
    borderRadius: 10,
    paddingLeft: 10
  },

  btnCadastro: {
    width: '100%',
    height: 40,
    backgroundColor: '#A0522D',
    borderRadius: 20
  }
});
