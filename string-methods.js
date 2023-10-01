// The + Operator

const str = 'Hello' + ' ' + 'friends'   // Hello friends

// Array.join()

['Hello', ' ', 'friends'].join('')      // Hello friends

// String.concat()

const str1 = 'Hello';
const str2 = 'friends';

console.log(str1.concat(' ', str2));    // "Hello friends"
console.log(str2.concat(', ', str1));   // "friends, Hello"