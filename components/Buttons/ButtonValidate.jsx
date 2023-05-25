import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ButtonValidate() {
  return <>
    <TouchableOpacity style={styles.buttonValidate} ><Text style={styles.textButton}>mon bouton</Text></TouchableOpacity>
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
