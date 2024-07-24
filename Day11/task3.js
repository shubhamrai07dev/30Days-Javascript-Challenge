function fetchDataFromServer(endpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data from ${endpoint}`);
    }, Math.random() * 2000); // Simulating a network request with a random delay
  });
}

fetchDataFromServer("endpoint1")
  .then((data) => {
    console.log(data);
    return fetchDataFromServer("endpoint2");
  })
  .then((data) => {
    console.log(data);
    return fetchDataFromServer("endpoint3");
  })
  .then((data) => {
    console.log(data);
    console.log("All data fetched successfully.");
  })
  .catch((error) => {
    console.error(`Error fetching data: ${error.message}`);
  });
