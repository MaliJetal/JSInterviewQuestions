/*
Closure - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
*/
//Sample -1 
function x(){
  var b = 100;
  return function y(){
    var a = 7;
    console.log(a);
    return function z(){
      console.log(a,b);
    }
    a = 200;
  }
  b = 300;
}
var t =  x();//z takes lexical scope/ environment of x and hence we get a value even though x get removed from stack
var t2 = t()();

/*O/p: 
7
7 100
*/

//Sample -2
function x1(){
  var b = 100;
  function y1(){
    var a = 7;
    console.log(a);
    function z1(){
      console.log(a,b);
    }
    a = 200;
    z1();
  }
  b = 300;
  y1();
}
x1();
/*O/p:
7
200 300
*/