import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/color";
import Input from "../components/Input";
import OutputCon from "../components/OutputCon";

export default function StartGame(props) {
  const [inputVal, setinputVal] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [enter, setEnter] = useState("");

  const numberHandler = (InputValue) => {
    setinputVal(InputValue.replace(/[^0-9]/g, ""));
  };

  const resetHandler = () => {
    setinputVal("");
    setConfirm(false);
  };

  const confirmHandler = () => {
    const chosenNum = parseInt(inputVal);
    if (isNaN(chosenNum) || chosenNum <= 0 || chosenNum > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 to 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    setConfirm(true);
    setEnter(chosenNum);
    setinputVal("");
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if (confirm) {
    confirmedOutput = (
      <Card styles={styles.output}>
        <Text>You Selected:</Text>
        <OutputCon text={enter} />
        <Button
          title="START GAME"
          onPress={() => props.startGameHandler(enter)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.inputCon}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card styles={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberHandler}
            value={inputVal}
          />
          <View style={styles.buttonPos}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetHandler}
                color={Colors.secondary}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  inputCon: {
    flex: 1,
    padding: 10,

    alignItems: "center",
  },
  buttonPos: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    width: 90,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  output: {
    margin: 20,
    alignItems: "center",
  },
});
