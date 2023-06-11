/* Show-casing the Thread Pool Example */

/* 
Calling node:crypto module since it is used for cyptographic operations in nodejs which is a CPU intensive work
pbkdf2() - password based key derivation function 2
Calling the pbkdf2() function both Synchronously and Asynchronously
And registering start and end time of execution in both scenarios
Show the difference between execution of the same task performed Synchronously and Asynchronously
Synchronous tasks are done in series
Asynchronous tasks are done in parallel
*/

/* Calling crypto module */
const crypto = require("node:crypto");

/* Increasing the size of Thread Pool since by default thread-pool has only 4 threads */
// process.env.UV_THREADPOOL_SIZE = 8;

/* Function to execute the code Synchronously in Javascript */
function SynchronousTask() {
  const start = Date.now();
  crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
  crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
  crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
  const end = Date.now();
  console.log(`Password Hashed in: ${end - start} ms`);
}

/* Function to execute the code Asynchronously by using Thread Pool of libuv */
function AsynchronousTask() {
  const MAX_CALLS = 16;
  const start = Date.now();
  for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
      const end = Date.now();
      console.log(`Password Hash ${i + 1} in: ${end - start} ms`);
    });
  }
}

// SynchronousTask();
// AsynchronousTask();
