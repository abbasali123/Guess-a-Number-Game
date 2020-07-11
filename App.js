import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGame from "./screen/StartGame";
import GameScreen from "./screen/GameScreen";
import GameOver from "./screen/GameOver";

export default function App() {
  const [userNumber, setuserNumber] = useState("");
  const [round, setRound] = useState(0);

  const startGameHandler = (selectedNum) => {
    setuserNumber(selectedNum);
    setRound(0);
  };

  const NewGameHandler = () => {
    setRound(0);
    setuserNumber(null);
  };

  let content = <StartGame startGameHandler={startGameHandler} />;

  const gameOver = (numberofRound) => {
    setRound(numberofRound);
  };

  if (userNumber && round <= 0) {
    content = <GameScreen userChoice={userNumber} gameOver={gameOver} />;
  } else if (round > 0) {
    content = (
      <GameOver
        rounds={round}
        userChoice={userNumber}
        NewGameHandler={NewGameHandler}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
