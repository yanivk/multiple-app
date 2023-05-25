import {UNITS} from "../constant";

export function getOppositeUnit(unit) {
  return unit === UNITS.celcius ? UNITS.fahrenheit : UNITS.celcius;
}

function celciusToFahrenheit(value) {
  return (value * 1.8 + 32).toFixed(1);
}
function fahrenheitToCelcius(value) {
  return ((value - 32) / 1.8).toFixed(1);
}
export function covertTemperatureTo(unit, value) {
  if (isNaN(value)) return "";
  if (unit === UNITS.celcius) return celciusToFahrenheit(value);
  return fahrenheitToCelcius(value);
}
