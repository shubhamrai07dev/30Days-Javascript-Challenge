function observeTryCatchFinally(shouldThrowError) {
  try {
    if (shouldThrowError) {
      throw new Error("An intentional error occurred.");
    }
  } catch (error) {
    console.log("Inside catch block. Error: ", error.message);
  } finally {
    console.log("Finally block always executes.");
  }
}

observeTryCatchFinally(false);


// observeTryCatchFinally(true);
