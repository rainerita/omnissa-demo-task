const themeToggle = document.getElementById("theme");
themeToggle.addEventListener("change", function () {
  document.body.classList.toggle("dark", this.checked);
});
