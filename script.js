const today = new Date();
document.getElementById("today").textContent = today.toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});
