function createFunctionArray(size) {
  const functionArray = [];

  for (let i = 0; i < size; i++) {
    functionArray.push(function () {
      console.log(i);
    });
  }

  return functionArray;
}

const functions = createFunctionArray(2);

functions[1](); 
