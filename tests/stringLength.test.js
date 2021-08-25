import { stringLength } from ".././modules/stringLength.js";

test('Should return 5 as the number of characters of "Apple"', () => {
  expect(stringLength("Apple")).toBe(5);
});