function rot13(str) {
  // str.forEach((char,index) => {
  //     console.log(` Char: ${char} and intvalue ${charCode(char)} `);
  // })
  var decodeStr = "";
  for (var i = 0; i < str.length; i++) {
    var intCharEncoded = str.charCodeAt(i);

    if (intCharEncoded >= 65 && intCharEncoded <= 90) {
      var intCharDecoded = intCharEncoded - 13;
      if (intCharDecoded < 65) {
        intCharDecoded = 91 - (65 - intCharDecoded);
      }
      var charDecoded = String.fromCharCode(intCharDecoded);
      decodeStr += charDecoded;
      //so that means is char code and we need to decode this value else just add in decode directly.
     // console.log(` Char:${str.charAt(i)}  and intvalue ${intCharEncoded} intCharDecoded: ${intCharDecoded} charDecoded : ${charDecoded} `);
    } else {
      decodeStr += str.charAt(i);
    }
  }

  return decodeStr;
}

export {
  rot13,
};
