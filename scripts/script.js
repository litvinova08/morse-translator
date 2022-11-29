import {
  translatorEngToMorse,
  translatorMorseToEng,
  inputText,
  translation,
  translateBtn,
} from "./variables.js";

import {
  convertEngSymbolToMorse,
  translateEngToMorse,
  convertEngSpaceToMorse,
} from "./eng-to-morse.js";

import {
  joinWordsIntoEngStr,
  joinLettersIntoWords,
  translateMorseToEng,
  convertMorseSymbolToEng,
  splitMorseWordsIntoLetters,
  splitMorseIntoWords,
  covertMorseArrtoMorseStr,
} from "./morse-to-eng.js";

//event listener: execute translation once the user clicks TRANSLATE
translateBtn.addEventListener("click", () => {
  //grad a string
  const textToTranslate = inputText.value;
  // translate the text and add this value to a results string with a space
  const temp = translate(textToTranslate);
  translation.value = temp;
  console.log("event listener" + temp);
  // translation.value = translate(textToTranslate);
  // alert(temp);
});

// function that translates eng to morse and morse to eng
function translate(str) {
  let rsl = "";
  if (checkIfEng(str)) {
    // covernt eng string to array
    const strToArr = str.split("");
    // translate eng array to morse array
    const textTranslatedInMorseArr = translateEngToMorse(strToArr);
    //convert morse array to a string; add spaces
    const textTranslatedInMorseStr = covertMorseArrtoMorseStr(
      textTranslatedInMorseArr
    );
    rsl = textTranslatedInMorseStr;
  } else {
    //split string with "    " -> to get words [str, str]
    const arrOfMorseWords = splitMorseIntoWords(str);
    //split morse words into letters [[], [], []]
    const arrOfArrWithMorseSymbols =
      splitMorseWordsIntoLetters(arrOfMorseWords);
    //loop through arrays and convert each morse symbol to a letter
    const arrOfArrWithEngLetters = translateMorseToEng(
      arrOfArrWithMorseSymbols
    );
    //join letters into words with no separator
    const arrOfEngWords = joinLettersIntoWords(arrOfArrWithEngLetters);
    //join words inot a string with " " space separator
    const textTranslatedIntoEngStr = joinWordsIntoEngStr(arrOfEngWords);
    rsl = textTranslatedIntoEngStr;
  }
  return rsl;
}
// console.log("translate fucntion" + translate(".... .."));

//function that checks whether string in Eng or morse
function checkIfEng(str) {
  let rsl;
  if (/[A-Z,a-z]/.test(str)) {
    rsl = true;
    // } else {
  } else if (/[ .-]/gm.test(str)) {
    rsl = false;
  } else {
    // throw new Error("please, enter a valid format");
    rsl = "please, enter a valid format";
  }
  return rsl;
}

console.log(checkIfEng(".... .."));
