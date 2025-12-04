// Select all AR buttons on the page
const arButtons = document.querySelectorAll(".ar-btn");

// For each AR button → trigger its matching model-viewer
arButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const viewer = document.querySelectorAll("model-viewer")[index];
    viewer.activateAR();
  });
});
