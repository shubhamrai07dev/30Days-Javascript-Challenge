import axios from "axios";


const url = "https://jsonplaceholder.typicode.com/posts/1";

// Make a GET request using axios
axios
  .get(url)
  .then((response) => {
    console.log("Response data:", response.data);
  })
  .catch((error) => {
    console.error("Error making request:", error);
  });
