function sumFibs(num) {
  //num return 0 if its negative functions
  if (num <= 0) return 0;

  var fibsArray = [1];
  var fibsArrayOdd = [1];
  for (var i = 1; i < num; ) {
    fibsArray.push(i);
    //only push when number is odd
    if (i % 2 != 0) {
      fibsArrayOdd.push(i);
    }

    //no need to check actully just safe side checking
    if (fibsArray.length >= 2) {
      i = fibsArray[fibsArray.length - 1] + fibsArray[fibsArray.length - 2];
    }
  }
  // console.log(fibsArray);
  //console.log(fibsArrayOdd);
  var sum = fibsArrayOdd.reduce(
    (previousvalue, currentvalue) => previousvalue + currentvalue,
    0
  );
  console.log(sum);
  return sum;
  //1, 1, 2, 3, 5 and 8.
}


function cacheFunction(func1) {
  cacheData = {};
  return function (n) {
    if (cacheData[n] == undefined) {
      var result = func1(n);
      cacheData[n] = result;     
    } 
    return cacheData[n];
  };
}
// sumFibs(75024);
// var memory = cacheFunction(sumFibs);
// memory(75024);
// memory(50);

export { sumFibs, cacheFunction };
