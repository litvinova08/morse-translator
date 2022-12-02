import {
  convertEngSymbolToMorse,
  translateEngToMorse,
  convertEngSpaceToMorse,
  translateEngToMorseArr,
} from "../scripts/eng-to-morse.js";

describe("test convertEngSpaceToMorse()", () => {
  it("replaces one eng space with two space for morse code", () => {
    expect(convertEngSpaceToMorse(" ")).toBe("  ");
  });
});

describe("text translateEngToMorseArr()", () => {
  it("convert eng letters to morse code", () => {
    expect(translateEngToMorseArr(["a", "b", "c"])).toStrictEqual([
      ".-",
      "-...",
      "-.-.",
    ]);
    expect(translateEngToMorseArr(["R", "i", "T", "a"])).toStrictEqual([
      ".-.",
      "..",
      "-",
      ".-",
    ]);
  });
});

describe("test convertEngSymbolToMorse()", () => {
  it("converts an eng character to a morse code", () => {
    expect(convertEngSymbolToMorse("I")).toBe("..");
    expect(convertEngSymbolToMorse("o")).toBe("---");
    expect(convertEngSymbolToMorse("f")).toBe("..-.");
  });
});

describe("test translateEngToMorse()", () => {
  it("loops through an array and convert eng letters to morse code; returns an array of morse code symbols", () => {
    expect(translateEngToMorse("sos")).toBe("... --- ...");
    expect(translateEngToMorse("abc")).toBe(".- -... -.-.");
    expect(translateEngToMorse("Rita")).toBe(".-. .. - .-");
    expect(translateEngToMorse("Rita sos")).toBe(".-. .. - .-    ... --- ...");
  });
});
