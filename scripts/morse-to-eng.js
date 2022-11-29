import {
  translatorEngToMorse,
  translatorMorseToEng,
  inputText,
  translation,
  translateBtn,
} from "./variables.js";

// function that join words in a string with " " space separator
export function joinWordsIntoEngStr(arr) {
  return arr.join(" ");
}
// console.log("join words into eng str" + joinWordsIntoEngStr(["as", "ss"]));

//function that join letters into words with no separator
export function joinLettersIntoWords(arrOfArr) {
  return arrOfArr.map((arr) => {
    return arr.join("");
  });
}
// console.log(
//   joinLettersIntoWords([
//     ["a", "s"],
//     ["s", "s"],
//   ])
// );

//function that loop through an array of arrays with morse words and convert each morse symbol to a letter
export function translateMorseToEng(arrOfArr) {
  return arrOfArr.map((arr) => {
    return arr.map((letter) => {
      return convertMorseSymbolToEng(letter);
      //
    });
  });
}

// console.log(
//   translateMorseToEng([
//     ["...", "-"],
//     ["..", "-.-"],
//   ])
// );

//function converts a morse code character to a english letter
export function convertMorseSymbolToEng(letter) {
  return translatorMorseToEng[letter];
}
// console.log(convertMorseSymbolToEng(".... . .-.. .-.. ---    .-. .. - .-"));

//function that split array of morse words into letters [[], [], []]
export function splitMorseWordsIntoLetters(arr) {
  const arrOfArrsWithMorseLetters = arr.map((wordArr) => {
    return wordArr.split(" ");
  });
  return arrOfArrsWithMorseLetters;
}
// console.log(splitMorseWordsIntoLetters(["... ---", "... ---"]));

//function split string of morse code with "    " -> to get morse words [str, str]
export function splitMorseIntoWords(str) {
  return str.split("    ");
}
// console.log(splitMorseIntoWords("... ---    ... ---"));

//function that converts array of morse symbols into a string with a space between
export function covertMorseArrtoMorseStr(morseArr) {
  return morseArr.join(" ");
}
