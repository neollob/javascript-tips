['a', 'b']
  .concat(['c']) // ['a', 'b', 'c']
  [('a', 'b')].join(['-']) // 'a-b'
  [('a', 'b', 'c')].slice(1) // ['b', 'c']
  [('a', 'b', 'c')].indexOf('b') // 1
  [('a', 'b', 'b')].lastIndexOf('b') // 2
  [(1, 2, 3)].map((x) => x * 2) // [2, 4, 6]
  [(2, 15, 3)].sort() // [15, 2, 3]
  [(1, 2, 3)].reverse() // [3, 2, 1]
  [(1, 2, 3)].reduce((x, y) => x * y) // 6
  [(1, 2, 3)].length // 3
  [(1, 2, 3)].every((x) => x < 10) // true
  [(1, 2, 3)].some((x) => x < 2); // true

const arr = [1, 2, 3];

const w = arr.shift(); // arr = [2, 3],        x = 1
const x = arr.unshift(9); // arr = [9, 1, 2, 3],  x = 4
const y = arr.pop(); // arr = [1, 2],        x = 3
const z = arr.push(5); // arr = [1, 2, 3, 5],  x = 4

// Filter unique values / remove duplicate elements
const array = [8, 1, 1, 2, 3, 4, 6, 6, 3, 1];

const uniqueArray = [...new Set(array)]; // Expected output: [8, 1, 2, 3, 4, 6]

// Truncate an array
array.length = 4; // Expected output: [8, 1, 1, 2]

// Last item in array
array.slice(-1); // Expected output: [1]

// 1. Creating an Array
let array = [1, 2, 3, 4, 5];

// 2. Accessing Elements
let first = array[0]; // Access the first element
let last = array[array.length - 1]; // Access the last element

// 3. Adding Elements
array.push(6); // Add to the end
array.unshift(0); // Add to the beginning
// add elements (where, how many to remove, element list)
array.splice(2, 0, 'a', 'b'); // Expected output: [0, 1, 'a', 'b', 2, 3, 4, 5, 6]

// 4. Removing Elements
array.pop(); // Remove last element
array.shift(); // Remove first element
array.splice(2, 1); // Remove element at index 2

// 5. Finding Elements
let index = array.indexOf(3); // Find index of an element
let includes = array.includes(3); // Check if array contains a value

// 6. Looping through Arrays
array.forEach((item) => console.log(item)); // Loop through each element

// 7. Transforming Arrays
let doubled = array.map((item) => item * 2); // Create a new array by transforming each element

// 8. Filtering Arrays
let even = array.filter((item) => item % 2 === 0); // Filter elements based on a condition

// 9. Reducing Arrays
let sum = array.reduce((acc, item) => acc + item, 0); // Sum all elements

// 10. Sorting Arrays
array.sort(); // Sort array (alphabetically or numerically)
array.sort((a, b) => a - b); // Sort numerically

// 11. Reversing an Array
array.reverse(); // Reverse the array

// 12. Concatenating Arrays
let arr2 = [6, 7, 8];
let combined = array.concat(arr2); // Combine two arrays

// 13. Slicing Arrays
let part = array.slice(1, 3); // Get a portion of an array (non-destructive)

// 14. Joining Arrays into Strings
let str = array.join(', '); // Join array elements into a string

// 15. Flattening Arrays
let nested = [1, [2, 3], [4, [5, 6]]];
let flat = nested.flat(); // Flatten a multi-dimensional array (1 level deep)
let deepFlat = nested.flat(Infinity); // Deeply flatten a nested array
