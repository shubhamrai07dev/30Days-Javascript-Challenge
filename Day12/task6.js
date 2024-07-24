function randomResolveReject() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Promise resolved successfully!");
    } else {
      reject(new Error("Promise rejected!"));
    }
  });
}

// Using the promise and handling the rejection
randomResolveReject()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Caught an error: ", error.message);
  });
