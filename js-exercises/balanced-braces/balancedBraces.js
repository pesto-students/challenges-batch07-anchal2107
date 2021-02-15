/**
 * balance Braces
 * @param  {...any} args
 *
 */
function balancedBraces(str) {
  let bracketsObjects = {
    "[": 0,
    "]": 0,
    "{": 0,
    "}": 0,
    "(": 0,
    ")": 0,
  };
  for (let char of str) {
    if (
      char === "[" ||
      char === "]" ||
      char === "(" ||
      char === ")" ||
      char === "{" ||
      char === "}"
    ) {
      if (bracketsObjects[char] == null) {
        bracketsObjects[char] = 0;
      }
      bracketsObjects[char] += 1;
      console.log(`char : ${char}`);
    }
  }
  if (
    bracketsObjects["["] == bracketsObjects["]"] &&
    bracketsObjects["("] == bracketsObjects[")"] &&
    bracketsObjects["{"] == bracketsObjects["}"]
  ) {
      return true;
  }
  return false;
}

export { balancedBraces };
