import Calculator from ".././modules/calculator.js";

describe('Calculator add method', () => {
  test('should return 5 when 2 and 3 is passed', () => {
    expect(Calculator.add(2,3)).toEqual(5);
  });

  test('should return 4 when -2 and 6 is passed', () => {
    expect(Calculator.add(-2,6)).toEqual(4);
  });

  test('Should throw error "Both parameters have to be numbers"', () => {
    expect(() => {
      Calculator.add('a',25);
    }).toThrow("Both parameters have to be numbers");
  })
});
