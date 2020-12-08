import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function App() {

  const dongf = () => {
    console.log('helo akas')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World !!!</Text>
      <Text>Hello World !!!</Text>
      <Text>You Are Mine n Bro !!!</Text>
      <Text>Hello World !!!</Text>
      <Button onPress={dongf} title='Press Me Now' color='#841584' accessibilityLabel='Learn More about react Native'/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
