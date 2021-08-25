import { reverseString } from ".././modules/reversestring.js";

test('Should return yadretsey when passed in with yesterday', () => {
  expect(reverseString("yesterday")).toBe("yadretsey");
});