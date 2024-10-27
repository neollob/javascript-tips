const str = 'Hello World';

str.length; // 11
str.charAt(4); // o
str.endsWith('d'); // true
str.includes('World'); // true
str.indexOf('W'); // 6;
str.repeat(2); // "Hello WorldHello World"
str.replace('World', 'all'); // "Hello all"
str.slice(6, 10); // "Worl"
str.split(' '); // ["Hello", "World"]
str.startsWith('Hello'); // true
str.substring(6, 11); // "World"
str.substr(1, 4); // "ello"
str.toLowerCase(); // "hello world"
str.toUpperCase(); // "HELLO WORLD"
'     Hello World    '.trim(); // "Hello World"

// The + Operator
const str0 = 'Hello' + ' ' + 'friends' // Hello friends
// Array.join()
const str00 = ('Hello', ' ', 'friends').join(''); // Hello friends

// String.concat()
const str1 = 'Hello';
const str2 = 'friends';

console.log(str1.concat(' ', str2)); // "Hello friends"
console.log(str2.concat(', ', str1)); // "friends, Hello"

// Template string
const str000 =`${str1} ${str2}`; // "Hello friends" 

// Convert to string
const val = 5 + ''; // Expected value: '5' -> typeof val: 'string'
