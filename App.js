import { StyleSheet, ImageBackground, View } from 'react-native';
import {Input} from "./components/Inputs/Input";
import {ButtonValidate} from "./components/Buttons/ButtonValidate";
import {useState} from "react";
import { DEFAULT_VALUE, DEFAULT_UNIT } from "./constant";
import {InputRendering} from "./components/Inputs/InputRendering";
import {covertTemperatureTo, getOppositeUnit} from "./services/temperature-service";
import sun from "./assets/sun.png";

export default function App() {
  const [value, setValue] = useState(DEFAULT_VALUE);
  const [unit, setUnit] = useState(DEFAULT_UNIT);
  const [currentColor, setCurrentColor] = useState();

  function changeUnit() {
    setUnit(getOppositeUnit(unit));
  }

  return (
    <ImageBackground source={sun} style={[value >= 0 ? styles.orange: styles.blue, styles.container]}>
      <View style={styles.mainContent}>
        <InputRendering value={covertTemperatureTo(unit, value)} unit={getOppositeUnit(unit)} />
        <Input defaultValue={value} defaultUnit={unit} onChangeText={setValue} />
        <ButtonValidate onPress={changeUnit} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20
  },
  mainContent: {
    alignItems: "center",
    justifyContent: "space-evenly",
    height: 350
  },
  orange: {
    backgroundColor: "orange"
  },
  blue: {
    backgroundColor: "blue"
  }
});
