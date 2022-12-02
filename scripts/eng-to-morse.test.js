import {
  convertEngSymbolToMorse,
  translateEngToMorse,
  convertEngSpaceToMorse,
} from "./eng-to-morse.js";

describe("test convertEngSpaceToMorse()", () => {
  it("replaces one eng space with two space for morse code", () => {
    expect(convertEngSpaceToMorse(" ").toBe("  "));
  });
});

// describe("test convertEngSymbolToMorse()", () => {
//   it("converts an eng character to a morse code", () => {
//     expect(convertEngSymbolToMorse("I").toBe(".."));
//     expect(convertEngSymbolToMorse("o").toBe("---"));
//   });
// });

// describe("test translateEngToMorse()", () => {
//   it("loops through an array and convert eng letters to morse code; returns an array of morse code symbols", () => {
//     expect(translateEngToMorse(["s", "o", "s"]).toBe(["...", "---", "..."]));
//   });
// });
