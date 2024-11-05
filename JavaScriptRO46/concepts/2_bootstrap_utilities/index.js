// Search the button with id="btn-theme-toggle" and assign it to a variable
const button = document.getElementById("btn-theme-toggle");

// Set a new event for the toggle button of type click
button.addEventListener("click", function () {
  // Check if the "data-bs-theme" attribute has "dark" value
  if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
    // Set the "data-bs-theme" attribute value to "light"
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    // Set the "data-bs-theme" attribute value to "dark"
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});
