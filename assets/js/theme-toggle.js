// THis script switches which CSS stylesheet is referenced by index.html

// Selects the theme toggle button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
  // If the current URL contains "dark-theme.css"
  if (theme.getAttribute("href") == "assets/css/dark-theme.css") {
    // ... then switch it to "light-theme.css"
    theme.href = "assets/css/light-theme.css";
    // Otherwise...
  } else {
    // ... switch it to "dark-theme.css"
    theme.href = "assets/css/dark-theme.css";
  }
});
