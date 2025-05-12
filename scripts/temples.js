// Dynamically populate footer date information
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Hamburger Menu Toggle
const hamburger = document.createElement('button');
hamburger.textContent = '☰';
hamburger.setAttribute('aria-label', 'Toggle Navigation');
hamburger.style.cssText = `
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

const nav = document.querySelector('nav');
nav.parentNode.insertBefore(hamburger, nav);

hamburger.addEventListener('click', () => {
  nav.classList.toggle('visible');
  hamburger.textContent = nav.classList.contains('visible') ? '✖' : '☰';
});

// Add styles for the toggle effect
const style = document.createElement('style');
style.textContent = `
  nav {
    display: none;
    flex-direction: column;
    align-items: center;
    background-color: #0077cc;
    padding: 1rem;
  }
  nav.visible {
    display: flex;
  }
  @media (min-width: 768px) {
    nav {
      display: flex !important;
      flex-direction: row;
    }
    button[aria-label="Toggle Navigation"] {
      display: none;
    }
  }
`;
document.head.appendChild(style);