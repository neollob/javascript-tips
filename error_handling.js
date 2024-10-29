// Error Handling in JavaScript

// 1. try...catch Statement
// Use this to handle errors that may occur in your code.
try {
  // Code that may cause an error
  let result = someFunction(); // Replace with actual function
  console.log(result); // Log the result if no error
} catch (error) {
  // Code here runs if an error occurs in the try block
  console.error('An error occurred: ', error.message); // Log the error message
} finally {
  // This block runs regardless of whether an error occurred
  console.log('Execution finished.');
}

// 2. Throwing Custom Errors
// You can create and throw your own errors for specific situations.
const checkAge = (age) => {
  if (age < 18) {
    throw new Error('Age must be at least 18'); // Throw an error if age is under 18
  }
  return 'Access granted'; // If age is valid, return a message
};

try {
  console.log(checkAge(15)); // Test with an invalid age
} catch (error) {
  console.error(error.message); // Log the error message
}

// 3. Using Custom Error Classes
// Create specific error types by extending the built-in Error class.
class ValidationError extends Error {
  constructor(message) {
    super(message); // Call the parent constructor
    this.name = 'ValidationError'; // Set custom error name
  }
}

const validateUsername = (username) => {
  if (username.length < 5) {
    throw new ValidationError('Username must be at least 5 characters long'); // Throw custom error
  }
};

try {
  validateUsername('abc'); // Test with an invalid username
} catch (error) {
  console.error(`${error.name}: ${error.message} `); // Log error name and message
}

// 4. Asynchronous Error Handling
// Handle errors in asynchronous code using async/await.
const fetchData = async () => {
  try {
    let response = await fetch('https://api.example.com/data'); // Fetch data
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); // Check response status
    }
    let data = await response.json(); // Parse JSON data
    console.log(data); // Log the data
  } catch (error) {
    console.error('Error fetching data: ', error.message); // Log errors
  }
};

fetchData(); // Call the function to fetch data

// 5. Error Handling in Promises
// Use .catch() to handle errors in promises.
let promise = new Promise((resolve, reject) => {
  let success = false; // Simulate a failure
  if (success) {
    resolve('Success!'); // Fulfilled case
  } else {
    reject(new Error('Failure!')); // Rejected case
  }
});

promise
  .then((result) => console.log(result)) // Log success result
  .catch((error) => console.error('Caught an error: ', error.message)); // Log error

// 6. Best Practices for Error Handling
// - Always provide clear and meaningful error messages.
// - Don't ignore errors; always log or handle them.
// - Use custom error classes to categorize different error types.
