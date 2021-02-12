// You can change the `args`
function bind(func1,obj) {
  return function(){
      return func1.apply(obj,arguments);
  }
}


module.exports = { bind };
