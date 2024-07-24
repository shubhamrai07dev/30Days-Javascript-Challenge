const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    const data = await response.json();

    console.log("Response data:", data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();
