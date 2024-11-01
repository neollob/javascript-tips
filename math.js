// Math operator

const numbers = [6, 3, 4, 8, 7, 5, 1, 9];

console.log(Math.max(...numbers)); // Expected: 9
console.log(Math.min(...numbers)); // Expected: 1

Math.round(4.4);        // = 4 - rounded
Math.round(4.5);        // = 5
Math.pow(2, 8);         // = 256 - 2 to the power of 8
Math.sqrt(49);          // = 7 - square root
Math.abs(-3.14);        // = 3.14 - absolute, positive value
Math.ceil(3.14);        // = 4 - rounded up
Math.floor(3.99);       // = 3 - rounded down
Math.sin(0);            // = 0 - sine
Math.cos(Math.PI);      // OTHERS: tan,atan,asin,acos,
Math.min(0, 3, -2, 2);  // = -2 - the lowest value
Math.max(0, 3, -2, 2);  // = 3 - the highest value
Math.log(1);            // = 0 natural logarithm
Math.exp(1);            // = 2.7182pow(E,x)
Math.random();          // random number between 0 and 1
Math.floor(Math.random() * 5) + 1; // random integer, from 1 to 5

// Math constants
E, PI, SQRT2, SQRT1_2, LN2, LN10, LOG2E, Log10E;

const pi = Math.PI;         // 3.141592653589793
const sqrt2 = Math.SQRT2;   // 1.4142135623730951
