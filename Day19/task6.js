const regex = /^([\w.%+-]+)@([\w.-]+\.[a-zA-Z]{2,})$/;
const email = "username@example.com";
const matches = email.match(regex);

if (matches) {
  const username = matches[1];
  const domain = matches[2];
  console.log(`Username: ${username}`);
  console.log(`Domain: ${domain}`);
} else {
  console.log("No match found.");
}
