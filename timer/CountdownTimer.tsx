import * as React from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Timer({ path }: { path: string }) {
  return (
    <View style={styles.container}>
      <CountdownCircleTimer
        isPlaying
        duration={10}
        onComplete={() => alert('finished')}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}>
        {({ remainingTime, animatedColor }) => (
          <Animated.Text
            style={{ ...styles.remainingTime, color: animatedColor }}>
            {remainingTime}
          </Animated.Text>
        )}
      </CountdownCircleTimer>
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
});
