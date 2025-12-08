document.querySelectorAll(".ar-btn").forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const viewer = document.querySelectorAll("model-viewer")[index];
    viewer.activateAR();
  });
});
