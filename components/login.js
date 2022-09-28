import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react'
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Login({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(auth=>console.log(auth))
    .catch(error=>console.error(error))
  }

  const nextpage = (()=>{
     navigation.navigate('Recording')
  })

  return(
    <View style={styles.container}>
    <TextInput style={styles.input} onChangeText={(email) => setEmail(email)} placeholder='Name'></TextInput>
    <TextInput style={styles.input} onChangeText={(password) => setPassword(password)} placeholder='Password'></TextInput>

    <Button  title='login' onPress={nextpage} style={styles.btn}/>
    <TouchableOpacity style={styles.btn} onPress={login}>tttt</TouchableOpacity>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    backgroundColor: '#D0B8A8',
    marginTop: 50,
    
  },
  input: {
    width: 330,
    height: 50,
    paddingLeft: 12,
    marginTop: 10,
    backgroundColor: '#DFD3C3'
  },
  btn: {
    marginTop: 10,
    width: 333,
    height: 40,
    backgroundColor: 'F8EDE3',
    paddingLeft: 150,
    paddingTop: 10
  }
})