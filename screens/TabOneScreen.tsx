import React from "react";
import {
  StyleSheet,
  View
} from "react-native";
import  SelectWorkout  from '../components/CountdownModal';

const workoutOptions = () => {
  return (
    <View style={styles.centeredView}>
      <SelectWorkout time="1" />
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});

export default workoutOptions;
