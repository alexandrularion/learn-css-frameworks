// Search the button with id "theme-btn" and assign it to a variable
const themeButton = document.getElementById("theme-btn");

// Add an event of type "click", to the button that toggles the theme
themeButton.addEventListener("click", function () {
  // Check if the attribute "data-bs-theme" is "dark" on <html />
  if (document.documentElement.getAttribute("data-bs-theme") === "dark") {
    // Set the attribute "data-bs-theme" with value "light"
    document.documentElement.setAttribute("data-bs-theme", "light");
  } else {
    // Set the attribute "data-bs-theme" with valeu "dark"
    document.documentElement.setAttribute("data-bs-theme", "dark");
  }
});
