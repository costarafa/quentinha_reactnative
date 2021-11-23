import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default function App() {

  const [sabor, setSabor] = useState('');
  const [preco, setPreco] = useState('');
  const [tamanho, setTamanho] = useState('');

  const cadastro = () => {
    alert('funcionando');
  }
  
  return (
    <View style={styles.container}>
        <StatusBar hidden />

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
    width: 50,
    height: 40,
    backgroundColor: '#A0522D',
    borderRadius: 20,
    alignItems: 'flex-end'
  }
});
