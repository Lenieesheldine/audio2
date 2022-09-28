import React from 'react';
import {useState} from 'react'
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Signup({navigation}){

  const nextpage = (()=>{
     navigation.navigate('Login')
  })

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
    })
    .catch(error => alert(error.message))
  }

  return(
    <View>
    <TextInput placeholder='Name'></TextInput>
    <TextInput placeholder='Surname'></TextInput>
    <TextInput value={email} onChangeText={text => setEmail(text)} placeholder='Email'></TextInput>
    <TextInput placeholder='Phone number'></TextInput>
    <TextInput placeholder='Password' value={password} onChangeText={text => setPassword(text)} secureTextEntry></TextInput>

    <Button title="Signup" onPress={nextpage}/>
    <TouchableOpacity onPress={handleSignUp}>Signup</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFABE1'
  }
}) 