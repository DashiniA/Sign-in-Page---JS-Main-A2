// Sample user data
const users = [
  {
    username: "Dashini",
    password: "Dashini1234",
  },
  {
    username: "Tashie",
    password: "Tashie1234",
  },
];

// Check if user is already logged in
if (localStorage.getItem("loggedInUser")) {
  // Redirect to home page
  window.location.href = "HomePage.htm";
}

// Function to handle login
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if username and password are correct
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Store logged in user in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Redirect to home page
    window.location.href = "HomePage.htm";
  } else {
    alert("Invalid username or password");
  }
}
