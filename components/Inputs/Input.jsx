import {StyleSheet, TextInput, Text, View} from "react-native";

export function Input({defaultValue, defaultUnit, onChangeText}) {
  return <View style={styles.InputWrapper}>
    <TextInput style={styles.inputField} placeholder={"entre une valuer"} maxLength={4} keyboardType={"numeric"} defaultValue={defaultValue} onChangeText={onChangeText}/>
    <Text style={styles.inputIcon}>{defaultUnit}</Text>
  </View>
}

const styles = StyleSheet.create({
  InputWrapper: {
    alignSelf: "stretch",
    justifyContent: "center"
  },
  inputField:{
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 5
  },
  inputIcon: {
    position: "absolute",
    paddingEnd: 5,
    fontSize: 20
  }
});
