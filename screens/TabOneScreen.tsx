import * as React from 'react';
import { StyleSheet, Button } from 'react-native';

import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Button onPress={() => {
        alert('You tapped the button!');
      }}
        title="2-Minute Warm Up"
      />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button onPress={() => {
          alert('You tapped the button!');
        }}
          title="10-Minute Warm Up"
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <Button onPress={() => {
          alert('You tapped the button!');
        }}
          title="30-Minute Warm Up"
        />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
