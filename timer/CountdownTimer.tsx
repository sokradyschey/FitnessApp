import React, { useState } from "react";
import { View, StyleSheet, Animated, Button, Text } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return (
      <Text style={styles.timer}>Woo! Great Workout!</Text>
    )
  }
  if (remainingTime === 10) {
    return (
      <Text style={styles.timer}>Almost There..!</Text>
    )
  }
  return (
    <View style={styles.timer}>
      <Text style={styles.text}>Remaining</Text>
      <Text style={styles.value}>{remainingTime}</Text>
      <Text style={styles.text}>seconds</Text>
    </View>
  );
};


export default function Timer({ path }: { path: string }) {
  const [key, setKey] = useState(0);
  return (
    //   Have countdown to match the specified time
    <View style={styles.container}>
      <CountdownCircleTimer
        key={key}
        duration={60}
        isPlaying
        onComplete={() => {
            return [true, 1500] // repeat animation in 1.5 seconds
          }}
        colors={[
            ['#004777', 0.33], 
            ['#F7B801', 0.33], 
            ['#A30000', 0.33]
        ]}>
        {renderTime}
      </CountdownCircleTimer>
      <Button 
        onPress={() => setKey(prevKey => prevKey + 1)}
        title="Reset Timer"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: .50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  remainingTime: {
    fontSize: 46,
  },
  timer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    color: '#aaa',
  },
  value: {
    fontSize: 40,
  }

});
