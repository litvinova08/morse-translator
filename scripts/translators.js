//translator from eng to morse code
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

//translator from morse to eng
const translatorMorseToEng = Object.entries(translatorEngToMorse).reduce(
  (accumulator, current) => {
    accumulator[current[1]] = current[0];
    return accumulator;
  },
  {}
);

export { translatorEngToMorse, translatorMorseToEng };
