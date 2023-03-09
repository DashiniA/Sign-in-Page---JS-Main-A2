// Check if user is not logged in
if (!localStorage.getItem("loggedInUser")) {
  // Redirect to sign in page
  window.location.href = "SignIn.htm";
} else {
  // Get logged in user from local storage
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  document.getElementById("username").innerHTML = loggedInUser.username;
}

// Function to handle logout
function logout() {
  // Remove logged in user from local storage
  localStorage.removeItem("loggedInUser");

  // Redirect to sign in page
  window.location.href = "SignIn.htm";
}

// Function to handle creating new user
function createUser() {
  const newUsername = document.getElementById("new-username").value;
  const newPassword = document.getElementById("new-password").value;
  {
    alert("New User Created Successfully!");
  }

  // Add new user to the array of users
  users.push({
    username: newUsername,
    password: newPassword,
  });
 
  // Clear form fields
  document.getElementById("new-username").value = "";
  document.getElementById("new-password").value = "";

 
}
