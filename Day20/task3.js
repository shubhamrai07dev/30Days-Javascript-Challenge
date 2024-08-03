document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userDataDisplay = document.getElementById("userData");

  // Function to display user data from local storage
  function displayUserData() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    if (name && email) {
      userDataDisplay.textContent = `Name: ${name}, Email: ${email}`;
    } else {
      userDataDisplay.textContent = "No user data saved.";
    }
  }

  // Retrieve and display user data on page load
  displayUserData();

  // Event listener for form submission
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Save user data to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Display the saved user data
    displayUserData();

    // Optionally, reset the form
    userForm.reset();
  });
});
