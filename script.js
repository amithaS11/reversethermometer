const tempInput = document.getElementById('tempInput');
const temperatureDiv = document.getElementById('temperature');
const currentTempSpan = document.getElementById('currentTemp');
const alertSound = document.getElementById("alertSound");

const threshold = 30; // Set the temperature threshold

tempInput.addEventListener('input', function() {
    const currentTemp = parseInt(tempInput.value);
    const reverseTemp = 100 - currentTemp; // Reverse logic
    const heightPercentage = reverseTemp; // Directly use reverseTemp as percentage

    temperatureDiv.style.height = heightPercentage + '%'; // Set the height of the thermometer
    currentTempSpan.textContent = currentTemp; // Display current temperature

    // Play sound if temperature reaches or drops below threshold
    if (currentTemp <= threshold) {
        alertSound.play();
    }
});

// Initialize display to reflect the starting value of the input range
tempInput.dispatchEvent(new Event('input'));
