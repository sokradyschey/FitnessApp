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
  modalView: {
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding:20,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    textAlign: "center"
  }
});

export default workoutOptions;
