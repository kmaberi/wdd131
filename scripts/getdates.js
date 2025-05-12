// getdates.js
// Dynamically populate footer date information

// 1. Current Year
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
