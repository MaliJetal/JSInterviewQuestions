let name = {
  firstName: "Jetal",
  lastName: "Mali"
}

let printName = function(hometown, obj, state){
  console.log(this.firstName + " " + this.lastName + ", " + hometown + ", " + obj + ", " + state);
}

let printMyName = printName.bind(name, "Dehradun", "India");
printMyName("Uttarakand");

Function.prototype.mybind = function(...args){ //calls printName function
  let obj = this, //this => printName
      params = args.slice(1);
  return function(...args2){  //calls printMyName2 function
    obj.apply(args[0], [...params, ...args2]);
    /*apply function syntax
      1 arg - object we bind
      2 arg - array we pass in bind method
      3 arg - closure outer function arg
    */
  }
}

let printMyName2 = printName.mybind(name,"Dehradun", "India");
printMyName2("Uttarakand");