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