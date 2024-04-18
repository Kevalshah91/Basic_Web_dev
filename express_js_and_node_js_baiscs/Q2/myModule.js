// myModule.js

// Exported variable
const greeting = 'Hello from myModule';

// Exported function
function addNumbers(a, b) {
  return a + b;
}

// Export the variable and the function
module.exports = {
  greeting: greeting,
  addNumbers: addNumbers
};
