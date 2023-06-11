/*
Here, the async requests are network operation and not CPU-bound operation
It is not using Thread Pool for executing the async tasks
It does not get affected by the number of CPU cores
It doesn't matter how many requests we send to the URL, the average completion time of all the requests will always be similar
*/

const https = require("node:https");

function networkCall() {
  const MAX_CALLS = 12;
  const start = Date.now();
  for (let i = 0; i < MAX_CALLS; i++) {
    https
      .request("https://www.google.com", (res) => {
        res.on("data", () => {});
        res.on("end", () => {
          const end = Date.now();
          console.log(`Network Request ${i + 1} in: ${end - start} ms`);
        });
      })
      .end();
  }
}

networkCall();
