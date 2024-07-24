function createRejectedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected after 2 seconds"));
    }, 2000);
  });
}

async function handleRejectedPromise() {
  try {
    const result = await createRejectedPromise();
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

handleRejectedPromise();
