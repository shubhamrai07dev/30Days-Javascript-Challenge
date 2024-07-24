function practiceAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds");
    }, 2000);
  });
}

async function waitForPromise() {
  try {
    const result = await practiceAsync();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

waitForPromise();
