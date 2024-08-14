//Concept of I/O Operations
// I/O operations in Node.js are asynchronous by default, but they can also be synchronous if needed.

// Asynchronous I/O: In asynchronous I/O operations, the program does not wait for the I/O operation to complete. Instead, it continues executing other tasks, and a callback function is called when the I/O operation is finished. This allows the program to perform other tasks while waiting for I/O operations to complete, improving efficiency and responsiveness.

//Input/Output (I/O) operations involve the processes of receiving and sending data. Here’s a simplified breakdown:

// Input Operations: Collecting data from sources.

// Example: Asking a user to type their name and then capturing that text.
// Output Operations: Sending data to a destination.

// Example: Displaying the user’s name on the screen or saving it to a file.

// In Node.js, I/O operations can be performed using various built-in modules, such as fs (file system), http (web server), and readline (read user input).

// Synchronous I/O: In synchronous I/O operations, the program waits for the I/O operation to complete before proceeding to the next task. This can lead to blocking behavior, where the program is unresponsive while waiting for I/O operations to finish.

//1. Input from the Console
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('Enter your name: ', (name) => {
//   console.log('Hello, ' + name + '!');
//   rl.close();
// });


// Explanation:
// This code is a simple Node.js script that prompts the user to enter their name and then greets them with a personalized message. Here’s a breakdown of how it works:

// 1. Importing `readline` Module: 
//    const readline = require('readline');

//    This line imports the `readline` module, which allows for reading data from a readable stream (like the standard input in this case).

// 2. Creating Readline Interface: 
//    const rl = readline.createInterface({
//      input: process.stdin,
//      output: process.stdout
//    });

//    Here, we create an interface for input and output. The input is set to `process.stdin`, which represents standard input (the terminal), and the output is set to `process.stdout`, which represents standard output (also the terminal). This interface will be used to read user input and output responses.

// 3. Prompting for User Input: 

//    rl.question('Enter your name: ', (name) => {

//    This line displays the prompt "Enter your name: " to the user. The second argument is a callback function that will be executed once the user enters their name and presses Enter. The user's input is passed as a parameter named `name`.

// 4. Displaying the Greeting: 
//    console.log('Hello, ' + name + '!');

//    Inside the callback function, this line constructs a greeting message that includes the user's name and displays it in the console.

// 5. Closing the Interface: 
//    rl.close();

//    Finally, this line closes the readline interface to end the input session. This is important to free up resources and prevent the program from continuing to wait for input.

// In summary, the script prompts the user to enter their name, greets them using that name, and then gracefully closes the input session.



//2. Output to the Console
// To output data to the console in Node.js, you can use the `console.log()` function. This function takes one or more arguments and prints them to the standard output (usually the terminal).

// Example:
//console.log('Hello, World!');

// Explanation:
// This code snippet uses `console.log()` to output the message "Hello, World!" to the console. The message is displayed in the terminal when the script is executed.

// The `console.log()` function is commonly used for debugging, logging information, and displaying output to users in Node.js applications.

//3. Reading and Writing Files:
// Reading and writing files is a common I/O operation in Node.js. The `fs` module (file system) provides functions for interacting with the file system, such as reading files, writing files, and manipulating directories.

// Example: Reading a File
// const fs = require('fs');
// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Explanation:
// This code snippet reads the contents of a file named `example.txt` using the `fs.readFile()` function. Here’s a breakdown of how it works:


// 1. Importing the File System Module: 
//    const fs = require('fs');
//    This line imports the built-in Node.js file system module (`fs`), which allows you to interact with the file system, such as reading and writing files.

// 2. Reading a File:
//    fs.readFile('example.txt', 'utf8', (err, data) => { ... });
//     This line calls the readFile method from the 'fs' module to read a file named example.txt.
//     The second parameter, 'utf8', specifies the encoding format to read the file as a UTF-8 string.
//    The third parameter is a callback function that takes two arguments: 'err' (for any potential error) and 'data' (the contents of the file if read successfully).

// 3. Handling Errors and Output:
//    Inside the callback function:
//    'if (err) throw err;': This checks if there was an error reading the file. If there is an error, it throws the error, which stops execution and displays the error message.
//      'console.log(data);': If no error occurs, this line logs the content of the file to the console.

// In summary, this code reads the contents of "example.txt" and prints it to the console, while also handling any errors that may occur during the reading process.


// Reading a File Synchronously
//4. Writing to a File
// Writing to a file in Node.js is done using the `fs.writeFile()` function from the `fs` module. This function allows you to create or overwrite a file with the specified content.

// Example: Writing to a File
// const fs = require('fs');
// const content = 'Hello, Node.js!';
// fs.writeFile('output.txt', content, (err) => {
//   if (err) throw err;
//   console.log('File written successfully!');
// });

// Explanation:
// This code snippet writes the content "Hello, Node.js!" to a file named `output.txt` using the `fs.writeFile()` function. Here’s a breakdown of how it works:

// 1. Importing the File System Module:
//    const fs = require('fs');
//    This line imports the built-in Node.js file system module (`fs`), which provides functions for interacting with the file system.

// 2. Writing to a File:
//    const content = 'Hello, Node.js!';
//    fs.writeFile('output.txt', content, (err) => { ... });
//    This line calls the `writeFile` method from the `fs` module to write the content to a file named `output.txt`.
//    The second parameter, `content`, is the data to be written to the file.
//    The third parameter is a callback function that takes one argument: `err` (for any potential error).

// 3. Handling Errors and Output:
//    Inside the callback function:
//    `if (err) throw err;`: This checks if there was an error writing to the file. If there is an error, it throws the error, which stops execution and displays the error message.
//    `console.log('File written successfully!');`: If no error occurs, this line logs a success message to the console.

// In summary, this code writes the content "Hello, Node.js!" to a file named `output.txt` and logs a success message if the write operation is completed without any errors.



//5. Asynchronous vs. Synchronous I/O
// In Node.js, I/O operations can be performed asynchronously or synchronously. Here’s a comparison of the two approaches:

// Asynchronous I/O:
// Asynchronous I/O operations do not block the program's execution. Instead, the program continues running other tasks while waiting for I/O operations to complete.

// Example: Reading a file asynchronously using `fs.readFile()`.
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Synchronous I/O:
// Synchronous I/O operations block the program's execution until the I/O operation is completed. This can lead to a delay in program responsiveness.

// Example: Reading a file synchronously using `fs.readFileSync()`.
const fs = require('fs');
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);

// In the asynchronous example, the program continues running other tasks while the file is being read, and the callback function is called when the operation is complete. This allows the program to remain responsive and efficient.

// In the synchronous example, the program waits for the file to be read before proceeding to the next task. During this time, the program is blocked and unresponsive, which can impact performance, especially in applications with heavy I/O operations.



// I/O bound tasks vs CPU bound tasks
// In Node.js, tasks can be broadly categorized as I/O-bound tasks or CPU-bound tasks based on their nature and resource requirements.

// I/O-Bound Tasks:
// I/O-bound tasks are tasks that primarily involve input/output operations, such as reading from or writing to files, network operations, or interacting with databases. These tasks are typically slower due to the latency involved in I/O operations.

// Example: Reading a large file from disk or making an HTTP request to a remote server.

const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});  // I/O-bound task

// CPU-Bound Tasks:
// CPU-bound tasks are tasks that require significant processing power and computation. These tasks are typically faster but can be resource-intensive, especially on the CPU.

// Example: Performing complex mathematical calculations, image processing, or encryption/decryption operations.

let ans = 0;
for (let i = 1; i <= 1000000; i++) {
	ans = ans + i
}
console.log(ans);	// CPU-bound task

// Node.js is well-suited for handling I/O-bound tasks due to its asynchronous, non-blocking nature, which allows it to efficiently handle multiple I/O operations concurrently. However, Node.js may not be the best choice for CPU-bound tasks that require heavy computation, as it runs on a single thread and may not fully utilize multi-core CPUs for parallel processing.

// When developing Node.js applications, it's important to consider the nature of the tasks involved and choose the appropriate approach to optimize performance and resource utilization. For I/O-bound tasks, asynchronous I/O operations are recommended to improve efficiency and responsiveness, while CPU-bound tasks may benefit from offloading processing to worker threads or external services to avoid blocking the main event loop.



//Asynchronous code, callbacks
// Asynchronous programming in Node.js involves executing tasks concurrently without blocking the main event loop. This allows the program to remain responsive and handle multiple operations efficiently.

// Callbacks are a common pattern used in Node.js for handling asynchronous operations. A callback is a function that is passed as an argument to another function and is executed once the operation is completed.

// Example: Asynchronous File Read Operation with Callback
const fs = require('fs');
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Explanation:
// In this example, the `fs.readFile()` function is used to read the contents of a file named `example.txt` asynchronously. Here’s a breakdown of how it works:

// 1. Importing the File System Module:
//    const fs = require('fs');
//    This line imports the built-in Node.js file system module (`fs`), which provides functions for interacting with the file system.

// 2. Asynchronous File Read Operation:
//    fs.readFile('example.txt', 'utf8', (err, data) => { ... });
//    This line calls the `readFile` method from the `fs` module to read the contents of the file `example.txt`. The second parameter, `'utf8'`, specifies the encoding format to read the file as a UTF-8 string. The third parameter is a callback function that takes two arguments: `err` (for any potential error) and `data` (the contents of the file if read successfully). The callback function is executed once the file read operation is completed.

// 3. Handling Errors and Output:
//    Inside the callback function:
//    `if (err) { console.error(err); return; }`: This checks if there was an error reading the file. If an error occurs, it logs the error message to the console and returns to prevent further execution.
//    `console.log(data);`: If no error occurs, this line logs the content of the file to the console.

// In summary, this code snippet demonstrates how to read a file asynchronously using the `fs.readFile()` function and handle errors and output using a callback function. This asynchronous approach allows the program to continue running other tasks while waiting for the file read operation to complete.