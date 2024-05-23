// Get the button element
const button = document.querySelector("#toggleButton");

// Get the element to be toggled
const element = document.querySelector("#elementToToggle");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Toggle the visibility of the element
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
});
