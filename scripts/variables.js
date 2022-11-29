const translatorEngToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

//object with reversed fields
const translatorMorseToEng = Object.entries(translatorEngToMorse).reduce(
  (accumulator, current) => {
    accumulator[current[1]] = current[0];
    return accumulator;
  },
  {}
);
// console.log(translatorMorseToEng);

//get value from input textarea
const inputText = document.getElementById("user-input");

//access to output textarea
const translation = document.getElementById("translation-output");

//translate button
const translateBtn = document.getElementById("translate");

export {
  translatorEngToMorse,
  translatorMorseToEng,
  inputText,
  translation,
  translateBtn,
};
