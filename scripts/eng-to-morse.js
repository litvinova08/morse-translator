import { translatorEngToMorse } from "./translators.js";

//function that translates eng to morse
export function translateEngToMorse(str) {
  // convent eng string to array of eng letters
  const strToArr = str.split("");
  // translate eng array to morse array
  const textTranslatedInMorseArr = translateEngToMorseArr(strToArr);
  //convert morse array to a string; add spaces
  const textTranslatedInMorseStr = covertMorseArrtoMorseStr(
    textTranslatedInMorseArr
  );
  return textTranslatedInMorseStr;
}

//function that accepts an array of eng letters, loops through this array and converts eng letters to morse code; returns an array of morse code symbols
export function translateEngToMorseArr(arr) {
  return arr.map((symbol) => {
    if (symbol === " ") {
      return convertEngSpaceToMorse(symbol);
    } else if (/[A-Z, a-z]/.test(symbol)) {
      return convertEngSymbolToMorse(symbol);
    }
  });
}

//function converts a character to a morse code
export function convertEngSymbolToMorse(symbol) {
  return translatorEngToMorse[symbol.toUpperCase()];
}

// function to replace one space with two spaces (FYI, extra 2 spaces to divide words correctly will be added with covertMorseArrtoMorseStr())
export function convertEngSpaceToMorse(space) {
  return (space = "  ");
}

//function that converts array of morse symbols into a string with a space between
export function covertMorseArrtoMorseStr(morseArr) {
  return morseArr.join(" ");
}
