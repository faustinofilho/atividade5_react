import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler';
import QRCode from 'react-native-qrcode-svg';


const Tela1 = () => {

  const navigation = useNavigation();

  const navegar = () => {

    navigation.navigate('Tela2');

  }

  const [codigo, setCodigo] = useState('');
  const [resultado, setResultado] = useState('');

  const gerar = () => {
    setResultado(codigo)
  }

  return (
    <View style={{padding: 10, backgroundColor: '#ccc', height:"100%"}}>
    <Text style={{fontSize: 30, fontWeight:'700', color: '#000', marginBottom: 20}}>Gere seu QRCode</Text>
      {/* <Text>{resultado}</Text> */}

      <QRCode
      size={350}
        value='{resultado}'
      />

      <TextInput placeholder='Digite aqui o codigo' style={{backgroundColor: '#f5f5f5', padding: 10, marginBottom: 30, alignItems: 'center', marginTop: 30}} onChangeText={(value)=>setCodigo(value)}/>


      <TouchableOpacity style={{backgroundColor: '#aaa4dd', padding: 10, marginBottom: 10, alignItems: 'center'}} onPress={gerar}>
        <Text style={{color: '#fff',fontWeight:'700'}}>Gerar codigo</Text>
      </TouchableOpacity>
      {/* <Button title="IR tela 2" onPress={navegar} /> */}

      <Text style={{color: '#fff',fontWeight:'700', marginTop: 20}}>Developer by: Faustino Filho</Text>
    </View>
  );
}

export default Tela1;