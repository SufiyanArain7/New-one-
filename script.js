// Countdown Timer
function updateCountdown() {
    const targetDate = new Date("2026-01-03T00:00:00"); // Set the birthday date here
    const currentDate = new Date();
    const remainingTime = targetDate - currentDate;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);

// Show the birthday card
function showCard() {
    document.getElementById('birthdayCard').style.display = "block";
    document.getElementById('backgroundMusic').play();
}

// Open the card
function openCard() {
    alert("You opened the birthday card!");
}

// Start the countdown when the page loads
window.onload = updateCountdown;
