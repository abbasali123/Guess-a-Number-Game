import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/color";
export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  headertitle: {
    color: "black",
    fontSize: 18,
  },
});
