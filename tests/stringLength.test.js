import { stringLength } from ".././modules/stringLength.js";

test('Should return 5 as the number of characters of "Apple"', () => {
  expect(stringLength("Apple")).toBe(5);
});


test('Should throw error for a string of length 13', () => {
  expect(() => {
    stringLength("Complications");
  }).toThrow("The string's is greater than 0 characters");
})

test('Should throw error that string has less than 1 character', () => {
  expect(() => {
    stringLength("");
  }).toThrow("The string's length less than 1 character");
})