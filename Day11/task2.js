function createTimeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected after 2 seconds"));
    }, 2000);
  });
}

createTimeoutPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });
