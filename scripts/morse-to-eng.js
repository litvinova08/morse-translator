import { translatorMorseToEng } from "./translators.js";

//function that translates morse to eng
export function translateMorseToEng(str) {
  //split a morse string with "    " to get an array of morse words [str, str]
  const arrOfMorseWords = splitMorseIntoWords(str);
  //split an array of morse words into letters [[], [], []]
  const arrOfArrWithMorseSymbols = splitMorseWordsIntoLetters(arrOfMorseWords);
  //convert each morse symbol into an eng letter
  const arrOfArrWithEngLetters = translateMorseToEngArr(
    arrOfArrWithMorseSymbols
  );
  //join eng letters into words [str, str]
  const arrOfEngWords = joinLettersIntoWords(arrOfArrWithEngLetters);
  //join words into a string with " " space separator
  const textTranslatedIntoEngStr = joinWordsIntoEngStr(arrOfEngWords);
  return textTranslatedIntoEngStr;
}

// function that joins words in a string with " " space separator
export function joinWordsIntoEngStr(arr) {
  return arr.join(" ");
}

//function that joins letters into words with no separator
export function joinLettersIntoWords(arrOfArr) {
  return arrOfArr.map((arr) => {
    return arr.join("");
  });
}

//function that loops through an array of arrays with morse words and converts each morse symbol to a letter
export function translateMorseToEngArr(arrOfArr) {
  return arrOfArr.map((arr) => {
    return arr.map((letter) => {
      return convertMorseSymbolToEng(letter);
      //
    });
  });
}

//function converts a morse code character to a english letter
export function convertMorseSymbolToEng(letter) {
  return translatorMorseToEng[letter];
}

//function that splits array of morse words into letters [[], [], []]
export function splitMorseWordsIntoLetters(arr) {
  const arrOfArrsWithMorseLetters = arr.map((wordArr) => {
    return wordArr.split(" ");
  });
  return arrOfArrsWithMorseLetters;
}

//function splits string of morse code with "    " -> to get morse words [str, str]
export function splitMorseIntoWords(str) {
  return str.split("    ");
}
