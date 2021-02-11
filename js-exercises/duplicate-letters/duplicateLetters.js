function duplicateLetters(...args) {
  let array = args.toString().split("");
  // console.log(array);
  //array.sort();
  //no need of sort here actully but we can make more efficient and fast if i use sort and check
 //console.log(array);
  var obj = {};
  array.forEach((e) => {
    obj[e] ? (obj[e] = obj[e] + 1) : (obj[e] = 1);
  });
  //array.forEach((e,i)=>{console.log(` e ${e} i ${i}`);})
  //console.log(obj);
  var maxduplicate = 0;
  for (const key in obj) {
    if (maxduplicate < obj[key]) {
      maxduplicate = obj[key];
    }
    //console.log(' obj key : '+obj[key]);
  }
  console.log(' obj maxduplicate : '+maxduplicate);
  if (maxduplicate > 0)
  {
    return maxduplicate;
  }
  return false;
}

export { duplicateLetters };
