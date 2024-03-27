import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, TextInput, View, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [text, setText] = useState("");

  const toSpeech = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={(text) => setText(text)} />
      <Button title="Press to hear text" onPress={toSpeech} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 200,
    borderColor: "grey",
    borderWidth: 1,
  },
});
