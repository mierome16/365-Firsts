import React from 'react';
import * as Font from 'expo-font';
import { 
  StyleSheet, 
  Text, 
  View, 
  ImageBackground,
  Image,
  TextInput
} 
  from 'react-native';


export default function Signup()  {
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [verify, setVerify] = React.useState('');

  return (
  <View style={styles.container}>
    <ImageBackground source={require('./assets/confetti.jpg')} style={styles.bg}/>
    <Image source={require('./assets/365logo.png')}/>
    <Text style={styles.header}>#signup</Text>
    <View style={styles.overlay}>

    </View>
    <View style={styles.form}>
      <Text>Name:</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setName(text)}
      value={name}
      />
      <Text>Username:</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setUsername(text)}
      value={username}
      /><Text>Email:</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
      />
      <Text>Password:</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setPassword(text)}
      value={password}
      />
      <Text>Verify Password:</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setVerify(text)}
      value={verify}
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    bg: {
      width: '100%', 
      height: '100%', 
      opacity: 0.25,
      position:'absolute'
    },
    overlay: {
      width: '80%',
      height: '60%',
      backgroundColor: '#F4E662',
      borderRadius: 15,
      position: 'absolute',
      left: 30,
      top: 275
    },
    form: {
      width: '80%',
      height: '60%',
      backgroundColor: '#3077E0',
      borderRadius: 15,
      position: 'relative',
      left: 10,
      top: 10
    },
    header: {
      fontSize: 36
    }
  });
