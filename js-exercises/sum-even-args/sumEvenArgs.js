const sumEvenArgs = (...args) => {
  let sumEvenArgsResult = 0;
  let evenNumbers = args.filter((a) => {
    return a % 2 === 0;
  });
  sumEvenArgsResult = evenNumbers.reduce(
    (previousvalue, currentvalue) => previousvalue + currentvalue,
    0
  );
  return sumEvenArgsResult;
};

export { sumEvenArgs };
