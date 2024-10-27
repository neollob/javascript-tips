// Log. The most basic method for outputting messages to the console. console.log("This is a log message"); // Output: This is a log message
const myNumber = 123;

console.log({ myNumber }); // Returns: { myNumber: 123 }

// Table. Displays data (e.g., arrays or objects) in a neat table format. Makes it easier to view and compare.
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const john = new Person('John', 'Smith');
const jane = new Person('Jane', 'Doe');
const goku = new Person('Son', 'Goku');

console.table([john, jane, goku]); // Returns array table

// (index) | firstName  | lastName
//    0	   |  'John'	  |  'Smith'
//    1	   |  'Jane'	  |  'Doe'
//    2	   |  'Son'	    |  'Goku'
// Array(3)

// Group. Groups related logs together, creating a collapsible section in the console. Useful for organizating logs.
console.group('User Information');
console.log('Name: John');
console.log('Age: 25');
console.groupEnd();
// Returns:
// User Information
//     Name: John
//     Age: 25

// Styled
console.log('%c So stylish', 'color: #permet en8896DB, font-size: 24px');

// Error. Displays an error message in red text. Useful for indicating problems.
console.error('This id an error message'); // Returns message in red

// Warning. Shows a warning message in yellow text. Often used to highlight potential issues. console.warn("This is a warning message"); // Output: This is a warning message (in yellow)
console.warn('This id an warning message'); // Returns message in yellow

// Info. Provides informational messages (styled like log messages in most browsers).
console.info('This id an informational message'); // Returns informational message

// Time. Measures the time taken for an operation. Start with console.time("label") and end with console.timeEnd("Label").
console.time('Loading Time');
for (let i = 0; i < 1000000; i++) {} // Example loop for timing
console.timeEnd('Loading Time'); // Output: Loading Time: (time in ms)

// Assert. Displays an error message if the condition provided is false. Helpful for quick checks during debugging.
const isAdmin = false;
console.assert(isAdmin, 'User is not an admin!'); // Output: Assertion failed: User is not an admin!

// Clear. Clears the console. Use this when you want to clean up previous messages.
console.clear(); // Clears all messages from the console

// Dir. Displays an interactive list of the properties of a specified JavaScript object.
// Useful for exploring objects.
const user = { name: 'Charlie', age: 35, location: 'New York' };
console.dir(user); // Output: Displays the 'user' object with its properties

// Trace. Prints a stack trace, showing the sequence of function calls leading to the point where it's called. Great for tracking the flow of code.
const firstFunction = () => {
  secondFunction();
};
const secondFunction = () => {};
console.trace('Trace example');
firstFunction();
/* Output:
Trace example
at secondFunction (<anonymous>:XX)
at firstFunction (<anonymous>:XX)
*/

// Count. Logs the number of times it's been called with a specific label. Useful for tracking events or calls.
console.count('Counter'); // Output: Counter: 1
console.count('Counter'); // Output: Counter: 2
console.count('Another Counter'); // Output: Another Counter: 1
console.count('Counter'); // Output: Counter: 3

// CountReset. Resets the count for a specified label.
console.countReset('Counter');
console.count('Counter'); // Output: Counter: 1
