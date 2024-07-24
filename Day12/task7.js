function randomResolveOrReject() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
      if (randomNumber > 0.5) {
        resolve("Promise resolved successfully!");
      } else {
        reject(new Error("Promise rejected!"));
      }
    }, 1000); 
  });
}

async function handleRandomPromise() {
  try {
    const result = await randomResolveOrReject();
    console.log(result);
  } catch (error) {
    console.error("Caught an error: ", error.message);
  }
}

handleRandomPromise();
