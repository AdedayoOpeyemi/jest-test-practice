const capitalize = string => {
  if (typeof string !== 'string') {
    throw ("Please pass in a string data type")
  }
  const lower = string.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export { capitalize }