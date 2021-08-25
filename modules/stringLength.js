const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length
  } else if (string.length < 1) {
      throw ("The string's length less than 1 character")
  }
  throw("The string's is greater than 0 characters")

}

export { stringLength }
