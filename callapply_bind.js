/****** call,apply band bind function *****/

let name = {
  firstName: "John",
  lastName: "Doe"
}

let name2 = {
  firstName : "Tom",
  lastName : "Louise"
}

let printFullName = function(hometown, state) {
  console.log(this.firstName + " " + this.lastName + " " + "stays at" + " " + hometown + " " + state);
}

//call() - arg1- reference object, arg2 - n : arguments of tht method
printFullName.call(name, "Los Angeles", "California");

//apply() - arg1- reference object, arg2 : arguments in array
printFullName.apply(name2, ["Illinois", "Chicago"]);

//bind() - create a duplicate function and invoke later
let printName = printFullName.bind(name, "Ohio", "Columbus");
printName();