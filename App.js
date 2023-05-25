import {useEffect, useState} from "react";
import { StyleSheet, ImageBackground, View } from 'react-native';
import {Input} from "./components/Inputs/Input";
import {ButtonValidate} from "./components/Buttons/ButtonValidate";
import { DEFAULT_VALUE, DEFAULT_UNIT } from "./constant";
import {InputRendering} from "./components/Inputs/InputRendering";
import {covertTemperatureTo, getOppositeUnit, isColdTemperature} from "./services/temperature-service";
import hot from "./assets/hot.png";
import cold from "./assets/cold.png";

export default function App() {
  const [currentValue, setCurrentValue] = useState(DEFAULT_VALUE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const [currentImage, setCurrentImage] = useState();

  useEffect(() => {
    isColdTemperature(currentUnit, currentValue) ? setCurrentImage(cold) : setCurrentImage(hot);
  }, [currentValue, currentUnit])
  function changeUnit() {
    setCurrentUnit(getOppositeUnit(currentUnit));
  }

  return (
    <ImageBackground source={currentImage} style={styles.container}>
      <View style={styles.mainContent}>
        <InputRendering value={covertTemperatureTo(currentUnit, currentValue)} unit={getOppositeUnit(currentUnit)} />
        <Input defaultValue={currentValue} defaultUnit={currentUnit} onChangeText={setCurrentValue} />
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
});
