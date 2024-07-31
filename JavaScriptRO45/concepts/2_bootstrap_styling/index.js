// Search the button with id="theme-btn" and select it for manipulation
const themeButton = document.querySelector("#btn-theme");

// Add an event of type "click" to the button that toggles the theme
themeButton.addEventListener("click", function () {
  // Check if the attribute "data-bs-theme" has value "dark" on <html /> tag
  if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
    // Set the attribute "data-bs-theme" with value of "light"
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    // Set the attribute "data-bs-theme" with value of "dark"
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});
