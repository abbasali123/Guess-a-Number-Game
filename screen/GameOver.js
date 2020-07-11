import React from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>You took {props.rounds} attempts to guess</Text>
      <Text>Number was {props.userChoice}</Text>
      <Button title="New Game" onPress={props.NewGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOver;
