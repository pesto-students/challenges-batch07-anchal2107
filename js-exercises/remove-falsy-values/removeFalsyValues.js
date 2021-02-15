function removeFalsyValues(array) {
  let resultArray=[];
   array.filter((element) => {
    if (element == null || isNaN(element)|| element == undefined || element ==false) {
   console.log(element);
    }
    else{return resultArray.push(element);}
  });
  return resultArray;
}
export { removeFalsyValues };
