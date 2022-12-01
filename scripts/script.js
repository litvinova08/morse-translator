import { inputText, translation, translateBtn, cleanBtn } from "./variables.js";

import { translateEngToMorse } from "./eng-to-morse.js";

import { translateMorseToEng } from "./morse-to-eng.js";

//event listener: execute translation once the user clicks TRANSLATE
translateBtn.addEventListener("click", () => {
  const textToTranslate = inputText.value;
  const checkedInput = checkInput(textToTranslate);
  if (checkedInput == "eng") {
    translation.value = translateEngToMorse(textToTranslate);
  } else if (checkedInput === "morse") {
    translation.value = translateMorseToEng(textToTranslate);
  } else if (checkedInput === "invalid") {
    alert("need valid input");
  } else if (checkedInput === "") {
    alert("What do you want to translate?");
  }
});

//clean both fields
cleanBtn.addEventListener("click", () => {
  inputText.value = "";
  translation.value = "";
});

//function that accepts an input string and checks whether input in eng, morse or invalid
export function checkInput(str) {
  let rsl;
  if (/^[a-z ]+$/i.test(str)) {
    rsl = "eng";
  } else if (/^[ .-]+$/i.test(str)) {
    rsl = "morse";
  } else {
    rsl = "invalid";
  }
  return rsl;
}
