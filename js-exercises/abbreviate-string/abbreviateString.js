// import { isString } from "util";

function abbreviateString(str) {
 console.log(`Orignal String :${str}`);
  var array = str.split(' ');
  var output = "";
  if (array.length > 0) {
    output = array[0];
    if (array.length >= 1) {
      output += " " + array[array.length - 1].slice(0, 1).toUpperCase() + ".";
    }
  }
  console.log(`Result String output is ${output}`);
  return output;
}

export { abbreviateString };
