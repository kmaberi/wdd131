const products = [
  { id: "fb001", name: "Football Boots" },
  { id: "gg002", name: "Goalkeeper Gloves" },
  { id: "tc003", name: "Training Cones" },
  { id: "tj004", name: "Team Jersey" },
  { id: "sg005", name: "Shin Guards" }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });

  // Footer year and last modified
  document.getElementById("currentYear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});