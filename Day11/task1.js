function createTimeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

createTimeoutPromise().then((message) => {
  console.log(message);
});
