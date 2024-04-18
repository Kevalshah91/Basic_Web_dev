const myModule = require('./myModule');

// Access the exported variable
console.log(myModule.greeting); // Should print: Hello from myModule

// Call the exported function
console.log(myModule.addNumbers(5, 3)); 
