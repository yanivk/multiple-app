import {StyleSheet, Text} from "react-native";

export function InputRendering({value, unit}) {
  return <Text style={styles.inputRendering}>{value} {unit}</Text>
}

const styles = StyleSheet.create({
  inputRendering: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff"
  },
});
