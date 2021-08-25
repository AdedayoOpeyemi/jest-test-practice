import { capitalize} from ".././modules/capitalize.js";

describe('Capitalize method', () => {
  test('should return "Apple" when "apple" is passed', () => {
    expect(capitalize("apple")).toEqual("Apple");
  });

  test('should return "Orange" when "oRAnGe"is passed', () => {
    expect(capitalize("oRAnGe")).toEqual("Orange");
  });

  test('Should throw error "Please pass in a string data type"', () => {
    expect(() => {
      capitalize(25);
    }).toThrow("Please pass in a string data type");
  })
});
