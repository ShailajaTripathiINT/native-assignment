import React from 'react';
import { View, TextInput,Button,Text } from 'react-native';

export default function Register() {
  
  return (
    <View style={styles.container}>
     <Text>Register Here</Text>
     <Text>Name</Text>
      <TextInput></TextInput> 
      <Text>E-mail</Text>    
      <TextInput></TextInput>
      <Text>Password</Text>
      <TextInput></TextInput>
      <Text>Phone Number</Text>
      <TextInput></TextInput>
      <Text>Location</Text>
      <TextInput></TextInput>
      <Button title="Register"/>
     </View>
  );
}

const styles =StyleSheet.container({
  color:"red"
})