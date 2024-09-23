// 5 ways to define a function in JavaScript

// Function declaration

function sum(a, b) {
  return a + b;
}

sum(2, 3); // Expected: 5

// Function expression

let sum = function (a, b) {
  return a + b;
};

sum(2, 3); // Expected: 5

// Arrow function

let sum = (a, b) => {
  return a + b;
};

sum(
  2,
  3
)(
  // Expected: 5

  // IIFE function

  function (a, b) {
    return a + b;
  }
)(2, 3); // Expected: 5

// Function constructor

let sum = new Function('a', 'b', 'return a + b');

sum(2, 3); // Expected: 5
