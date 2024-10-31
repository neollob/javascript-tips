// Use 𝚙𝚎𝚛𝚏𝚘𝚛𝚖𝚊𝚗𝚌𝚎.𝚗𝚘𝚠() to measure the precise time taken by a function or block of code.

// Start the timer
const startTime = performance.now();

// Example of code to measure
for (let i = 0; i < 1000; i++) {
  // Simulate some operation
  Math.sqrt(i);
}

// End the timer
const endTime = performance.now();

console.log(`Execution time: ${endTime - startTime} milliseconds`);
