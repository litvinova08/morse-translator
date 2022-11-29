import {
  translatorEngToMorse,
  translatorMorseToEng,
  inputText,
  translation,
  translateBtn,
} from "./variables.js";

//function converts a character to a morse code
export function convertEngSymbolToMorse(symbol) {
  return translatorEngToMorse[symbol.toUpperCase()];
}

//function to loop through an array and convert eng letters to morse code; returns an array of morse code symbols
export function translateEngToMorse(arr) {
  return arr.map((symbol) => {
    if (symbol === " ") {
      return convertEngSpaceToMorse(symbol);
    } else if (/[A-Z, a-z]/.test(symbol)) {
      return convertEngSymbolToMorse(symbol);
    }
  });
}

// function to repalce one space with two spaces (FYI, extra 2 spaces to divide words correctly will be added with covertMorseArrtoMorseStr())
export function convertEngSpaceToMorse(element) {
  return (element = "  ");
}
