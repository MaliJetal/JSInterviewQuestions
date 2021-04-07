Hoisting is the featurre in javascript which allows us to call variable/function before declaring it.
the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.

console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
var num; // Declaration
num = 6; // Initialization

console.log(num); // Throws ReferenceError exception
num = 6; // Initialization

// Example with let:
a = 1; // initialization.
let a; // Throws ReferenceError: Cannot access 'a' before initialization

// Example with const:
a = 1; // initialization.
const a; // Throws SyntaxError: Missing initializer in const declaration

// Example 1
// Only y is hoisted

x = 1; // Initialize x, and if not already declared, declare it - but no hoisting as there is no var in the statement.
console.log(x + " " + y); // '1 undefined'
// This prints value of y as undefined as JavaScript only hoists declarations
var y = 2; // Declare and Initialize y

// Example 2
// No hoisting, but since initialization also causes declaration (if not already declared), variables are available.

a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'
