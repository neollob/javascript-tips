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
