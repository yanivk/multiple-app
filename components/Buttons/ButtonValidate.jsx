import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ButtonValidate({onPress}) {
  return <>
    <TouchableOpacity style={styles.buttonValidate} onPress={onPress}>
      <Text style={styles.textButton}>Change unit</Text>
    </TouchableOpacity>
  </>
}

const styles = StyleSheet.create({
  buttonValidate:{
    height: 50,
    backgroundColor: "#51a2dc",
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    paddingHorizontal: 20
  }
});
