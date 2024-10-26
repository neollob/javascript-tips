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

// info

console.info("This id an informational message") // Returns informational message
