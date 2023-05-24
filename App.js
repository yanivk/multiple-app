import { StyleSheet, Text, View } from 'react-native';
import {Input} from "./components/Inputs/Input";
import {ButtonValidate} from "./components/Buttons/ButtonValidate";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <Text>les degres</Text>
        <Input />
        <ButtonValidate />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c2c2',
    justifyContent: 'center',
    padding:20
  },
  mainContent: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 350
  }
});
