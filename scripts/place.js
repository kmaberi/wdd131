// Dynamically populate footer date information
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    // Formula for wind chill in Celsius
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1); // Round to 1 decimal place
}

// Static values for temperature and wind speed
const temperature = 25; // °C
const windSpeed = 10; // km/h

// Check if conditions are met for wind chill calculation
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = `${windChill} °C`;
} else {
    document.getElementById("windChill").textContent = "N/A";
}
document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent =
    "Last Modified: " + document.lastModified;

// Dynamically populate the current year
document.getElementById("currentYear").textContent = new Date().getFullYear();

// Dynamically populate the last modified date
document.getElementById("lastModified").textContent = document.lastModified;

// Dynamically populate the current date and time
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    document.getElementById("currentDateTime").textContent = now.toLocaleDateString('en-US', options);
    console.log("updateDateTime function is running");
}

// Detect and display the user's time zone
function detectTimeZone() {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById("timeZone").textContent = timeZone;
}

// Call the functions to set the initial values
updateDateTime();
detectTimeZone();

// Optionally, update the time every second
setInterval(updateDateTime, 1000);

// Function to render temples
function renderTemples(temples) {
  const container = document.getElementById("temples-container");

  temples.forEach((temple) => {
    // Create a card for each temple
    const card = document.createElement("div");
    card.classList.add("temple-card");

    // Add temple image
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `${temple.templeName} Image`;
    card.appendChild(img);

    // Add temple name
    const name = document.createElement("h3");
    name.textContent = temple.templeName;
    card.appendChild(name);

    // Add temple location
    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
    card.appendChild(location);

    // Add temple dedication date
    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);

    // Add temple area
    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;
    card.appendChild(area);

    // Append the card to the container
    container.appendChild(card);
  });
}

// Call the function to render temples
renderTemples(temples);
