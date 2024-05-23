// Function to validate the form
function validateForm() {
  // Get the form inputs
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if required fields are empty
  if (name === "" || email === "" || password === "") {
    alert("Please fill in all required fields.");
    return false;
  }

  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  // Check if email format is correct
  if (!(atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1)) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Check if password includes numbers
  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      alert("Password must include numbers.");
      return false;
    }
  }
  return true;
}
