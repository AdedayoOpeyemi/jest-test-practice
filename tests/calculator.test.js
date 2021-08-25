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

describe('Calculator subtract method', () => {
  test('should return 5 when 12 and 7 is passed', () => {
    expect(Calculator.subtract(12,7)).toEqual(5);
  });

  test('should return 7 when -2 and -9 is passed', () => {
    expect(Calculator.subtract(-2,-9)).toEqual(7);
  });

  test('Should throw error "Both parameters have to be numbers"', () => {
    expect(() => {
      Calculator.subtract('a',4);
    }).toThrow("Both parameters have to be numbers");
  })
});

describe('Calculator divide method', () => {
  test('should return 4 when 12 and 3 is passed', () => {
    expect(Calculator.divide(12,3)).toEqual(4);
  });

  test('should return 5 when 50 and 10 is passed', () => {
    expect(Calculator.divide(50,10)).toEqual(5);
  });

  test('should return 0 when 0 and 9 is passed', () => {
    expect(Calculator.divide(0,9)).toEqual(0);
  });

  test('Should throw error "cannot divide by zero"', () => {
    expect(() => {
      Calculator.divide(8,0);
    }).toThrow("cannot divide by zero");
  })

  test('Should throw error "Both parameters have to be numbers"', () => {
    expect(() => {
      Calculator.divide('a',4);
    }).toThrow("Both parameters have to be numbers");
  })
});

describe('Calculator multiply method', () => {
  test('should return 40 when 8 and 5 is passed', () => {
    expect(Calculator.multiply(8,5)).toEqual(40);
  });

  test('should return -20 when -4 and 5 is passed', () => {
    expect(Calculator.multiply(-4,5)).toEqual(-20);
  });

  test('should return 0 when 7 and 0 is passed', () => {
    expect(Calculator.multiply(7,0)).toEqual(0);
  });

  test('should return 0 when 0 and 0 is passed', () => {
    expect(Calculator.multiply(0,0)).toEqual(0);
  });

  test('Should throw error "Both parameters have to be numbers"', () => {
    expect(() => {
      Calculator.multiply('a',4);
    }).toThrow("Both parameters have to be numbers");
  })
});