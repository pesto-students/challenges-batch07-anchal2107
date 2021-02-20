function chunkArrayInGroups(array, chunkSize) {
  const resultArray = [];
  let endLimit = chunkSize;
  // slice(start,end)
  for (let startLimit = 0; startLimit < array.length; startLimit = +endLimit) {
    endLimit += startLimit;
    if (endLimit > array.length) {
      endLimit = array.length;
    }
    const chunkedArray = array.slice(startLimit, endLimit);
    resultArray.push(chunkedArray);
  }
  return resultArray;
}
export { chunkArrayInGroups };
