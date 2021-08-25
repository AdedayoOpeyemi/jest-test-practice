const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } if (string.length < 1) {
    throw new Error("The string's length less than 1 character");
  }
  throw new Error("The string's is greater than 0 characters");
};

export { stringLength as default };
