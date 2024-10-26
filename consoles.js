// variable names

const myNumber = 123;

console.log({ myNumber }); // Returns: { myNumber: 123 }

// Table

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
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

console.group("User Information")
console.log("Name: John")
console.log("Age: 25");
console.groupEnd()
// Returns:
// User Information  
//     Name: John
//     Age: 25

// Styled

console.log('%c So stylish', 'color: #permet en8896DB, font-size: 24px');

// Error

console.error("This id an error message") // Returns message in red

// Warning

console.warn("This id an warning message") // Returns message in yellow

// Info

console.info("This id an informational message") // Returns informational message


// Time. Measures the time taken for an operation. Start with console.time("label") and end with console.timeEnd("Label").
console.time("Loading Time");
for (let i = 0; i < 1000000; i++) {} // Example loop for timing
console.timeEnd ("Loading Time"); // Output: Loading Time: (time in ms)

// Assert. Displays an error message if the condition provided is false. Helpful for quick checks during debugging.
const isAdmin = false;
console.assert(isAdmin, "User is not an admin!"); // Output: Assertion failed: User is not an admin!

// Clear. Clears the console. Use this when you want to clean up previous messages.
console.clear(); // Clears all messages from the console

// Dir. Displays an interactive list of the properties of a specified JavaScript object.
// Useful for exploring objects.
const user = { name: "Charlie", age: 35, location: "New York" };
console.dir(user); // Output: Displays the 'user' object with its properties
