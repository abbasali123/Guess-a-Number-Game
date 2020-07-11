import React from "react";
import Colors from "../constants/color";

import { Text, View, StyleSheet } from "react-native";

export default function OutputCon(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 22,
    color: Colors.secondary,
  },
});
