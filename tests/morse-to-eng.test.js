import {
  translateMorseToEng,
  joinWordsIntoEngStr,
  joinLettersIntoWords,
  translateMorseToEngArr,
  convertMorseSymbolToEng,
  splitMorseWordsIntoLetters,
  splitMorseIntoWords,
} from "../scripts/morse-to-eng.js";

describe("test translateMorseToEng()", () => {
  it("translates morse to eng", () => {
    expect(translateMorseToEng("... --- ...")).toBe("SOS");
    expect(translateMorseToEng(".- -... -.-.")).toBe("ABC");
    expect(translateMorseToEng(".-. .. - .-")).toBe("RITA");
    expect(translateMorseToEng(".-. .. - .-    ... --- ...")).toBe("RITA SOS");
  });
});

describe("joinWordsIntoEngStr()", () => {
  it("join words in a string with a ' ' - space separator", () => {
    expect(joinWordsIntoEngStr(["I", "love", "coffee"])).toBe("I love coffee");
    expect(joinWordsIntoEngStr(["One"])).toBe("One");
    expect(joinWordsIntoEngStr(["TEXT", "TEXT"])).toBe("TEXT TEXT");
  });
});

describe("joinLettersIntoWords()", () => {
  it("joins letters into words with no separator", () => {
    expect(
      joinLettersIntoWords([["c", "o", "f", "f", "e", "e"]])
    ).toStrictEqual(["coffee"]);
    expect(
      joinLettersIntoWords([
        ["I"],
        ["l", "o", "v", "e"],
        ["c", "o", "f", "f", "e", "e"],
      ])
    ).toStrictEqual(["I", "love", "coffee"]);
  });
});

describe("test translateMorseToEngArr()", () => {
  it("converts each morse symbol to a letter", () => {
    expect(
      translateMorseToEngArr([
        ["....", ".."],
        ["..-", "...", ".", ".-."],
      ])
    ).toStrictEqual([
      ["H", "I"],
      ["U", "S", "E", "R"],
    ]);
    expect(translateMorseToEngArr([["..-", "...", ".", ".-."]])).toStrictEqual([
      ["U", "S", "E", "R"],
    ]);
  });
});

describe("test convertMorseSymbolToEng()", () => {
  it("converts a morse code character to a english letter", () => {
    expect(convertMorseSymbolToEng("..")).toBe("I");
    expect(convertMorseSymbolToEng("---")).toBe("O");
    expect(convertMorseSymbolToEng("..-.")).toBe("F");
  });
});

describe("splitMorseWordsIntoLetters()", () => {
  it("splits an array of morse words into letters", () => {
    expect(
      splitMorseWordsIntoLetters([".... ..", "..- ... . .-."])
    ).toStrictEqual([
      ["....", ".."],
      ["..-", "...", ".", ".-."],
    ]);
    expect(splitMorseWordsIntoLetters(["..- ... . .-."])).toStrictEqual([
      ["..-", "...", ".", ".-."],
    ]);
  });
});

describe("splitMorseIntoWords()", () => {
  it('splits string of morse code with "    " -> to get morse words', () => {
    expect(splitMorseIntoWords(".... ..    ..- ... . .-.")).toStrictEqual([
      ".... ..",
      "..- ... . .-.",
    ]);
  });
});
