// getdates.js
// Dynamically populate footer date information

// 1. Current Year
const yearSpan = document.getElementById('currentyear');
if (yearSpan) {
  const now = new Date();
  yearSpan.textContent = now.getFullYear();
}

// 2. Document Last Modified
const lastModP = document.getElementById('lastModified');
if (lastModP) {
  lastModP.textContent = 'Last Modified: ' + document.lastModified;
}
