const themeButton = document.getElementById("theme-toggle");
const actionButton = document.getElementById("action-btn");
const statusText = document.getElementById("status-text");

themeButton.addEventListener("click", () => {
  const isDarkMode = document.body.classList.toggle("dark-mode");

  themeButton.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

actionButton.addEventListener("click", () => {
  statusText.textContent = "Awesome! Your JavaScript code is running successfully.";
  statusText.style.color = "#28a745";
});
