export default class Calculator {
  static add(param1, param2) {
    if (typeof param1 !== 'number' || typeof param2 !== 'number') {
      throw ("Both parameters have to be numbers")
    }
    return param1 + param2
  }

  static subtract(param1, param2) {
    if (typeof param1 !== 'number' || typeof param2 !== 'number') {
      throw ("Both parameters have to be numbers")
    }
    return param1 - param2
  }

  static divide(param1, param2) {
    if (typeof param1 !== 'number' || typeof param2 !== 'number') {
      throw ("Both parameters have to be numbers")
    }
    if (param2 == 0) {
      throw ("cannot divide by zero")
    }
    return param1 / param2
  }

  static multiply(param1, param2) {
    if (typeof param1 !== 'number' || typeof param2 !== 'number') {
      throw ("Both parameters have to be numbers")
    }
    return param1 * param2
  }
}