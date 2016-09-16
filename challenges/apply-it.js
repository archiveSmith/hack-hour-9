/**
 * applies the invoked array to the function's parameter list
 * Example:
 *   var jae = function(name, age, location) {
 *     return name + " is " + age + " and he lives in " + location;
 *   };
 *
 *   var jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
 *   jaero(); //Returns "Jae is 19 and he lives in South Carolina"
 *
 * Another Example:
 *   var jasmine = function(name, age) {
 *     if(!age){
 *       return "We don't know how old " + name + " is!";
 *     }
 *
 *     else{
 *       return name + " is " + age + " years old!";
 *     }
 *   };
 *
 *   var jmoney = applyIt(jasmine, ["Jasmine"]);
 *   jmoney(); //Returns "We don't know how old Jasmine is!"
 *
 *  DO NOT USE THE BUILT IN APPLY METHOD OR THE SPREAD OPERATOR
 */

// function applyIt(func, args) {
//   const output = func(...args);
//   function print() {
//     return output;
//   }
//   return print;
// }

function applyIt(func, args) {
  let string = 'func(';
  for (let i = 0; i < args.length; i++) {
    string += '"' + args[i] + '"';
    if (args.length-1 !== i) {
      string += ',';
    }
  }
  string += ')';
  // console.log(string);
  return function () {
    return eval(string);
  };
}
// test data
// const jae = function(name, age, location) {
//   return name + " is " + age + " and he lives in " + location;
// };

// const jaero = applyIt(jae, ["Jae", 19, "South Carolina"]);
// console.log(jaero()); //Returns "Jae is 19 and he lives in South Carolina"

module.exports = applyIt;
