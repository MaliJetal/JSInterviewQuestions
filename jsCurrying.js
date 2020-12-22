/*
function Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single 

In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.


Syntax:
function Myfunction(a) {
  return (b) => {
    return (c) => {
      return a * b * c
    }
  }
}
*/

//Currying using bind() function
let multiply = function(x,y){
  console.log(x*y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(10);


//Currying using closure

let multiply2 = function(x){
  return function(y){
    console.log(x*y);
  }
}

let multiplyByThree = multiply2(3);
multiplyByThree(10)

