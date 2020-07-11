import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import OutputCon from "../components/OutputCon";
import Card from "../components/Card";

const generateNum = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const RandNum = Math.floor(Math.random() * (max - min)) + min;
  if (RandNum === exclude) {
    return generateNum(min, max, exclude);
  } else {
    return RandNum;
  }
};

export default function GameScreen(props) {
  console.log(props.userChoice);
  const [currentGuess, setcurrentGuess] = useState(
    generateNum(1, 100, props.userChoice)
  );
  const { userChoice, gameOver } = props;
  const [guessRound, setguessRound] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      gameOver(guessRound);
    }
  }, [currentGuess, userChoice, gameOver]);

  console.log(currentGuess);

  const nextguessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie ", "You Know that it is wrong..", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextGuess = generateNum(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setcurrentGuess(nextGuess);
    setguessRound((rnd) => rnd + 1);
  };

  return (
    <View style={styles.screeen}>
      <Text>Opponent's GUESS</Text>
      <OutputCon text={currentGuess} />
      <Card styles={styles.buttonCon}>
        <Button title="Lower" onPress={nextguessHandler.bind(this, "lower")} />
        <Button
          title="Higher"
          onPress={nextguessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screeen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonCon: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
