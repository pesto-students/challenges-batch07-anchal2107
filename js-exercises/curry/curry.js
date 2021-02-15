/**
 * This is curry Function
 */

//  function curry(fun)
// {
//   return function(a){
//     return function(b){
//       return fun(a,b)
//     }
//   }
  
// }


function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

export {
  curry,
};
