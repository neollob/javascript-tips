// JavaScript Comparison and Logical Operators


// Comparison Operators

const x = 5
// equal to
x == 8	    // false	
x == 5	    // true	
x == "5"	// true
// equal value and equal type
x === 5	    // true	
x === "5"	// false
// not equal 
x != 8	    // true
// not equal value or not equal type
x !== 5	    // false	
x !== "5"	// true	
x !== 8	    // true
// greater than
x > 8       // false
// less than
x < 8	    // true
// greater than or equal to
x >= 8	    // false
// less than or equal to
x <= 8	    // true


// Logical Operators

const y = 6
const z = 3
    // && and
    (y < 10 && z > 1)   // is true
    // || or
    (y == 5 || z == 5)  // is false
// ! not
!(y == z)           // is true


// Conditional (Ternary) Operator

variablename = (condition) ? value1 : value2
let voteable = (age < 18) ? "Too young" : "Old enough";


// Comparing Different Types

2 < 12	    // true	
2 < "12"	// true	
2 < "John"	// false	
2 > "John"	// false	
2 == "John"	// false	
"2" < "12"	// false	
"2" > "12"	// true	
"2" == "12"	// false


// The Nullish Coalescing Operator (??)

// The ?? operator returns the first argument if it is not nullish (null or undefined)
let userName = null;
let text = "missing";
let result = userName ?? text;


// The Nullish coalescing assignment (??=)

// The ??= operator, also known as the logical nullish assignment operator, only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined)

const muscleCar = { brand: 'Mustang' }
muscleCar.brand ??= 'Tesla';
console.log(muscleCar.brand);
// Expected output: 'Mustang'

muscleCar.speed ??= 250;
console.log(muscleCar.speed);
// Expected output: 250


// The Optional Chaining Operator (?.)

// The ?. operator returns undefined if an object is undefined or null (instead of throwing an error)
// Create an object:
const car = { type: "Mustang", model: "GT500", color: "Red" };
// Ask for car name:
document.getElementById("demo").innerHTML = car?.name;