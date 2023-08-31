// countdown.js

// Function to initialize the countdown
function initializeCountdown(containerId, targetDate) {
  const targetTime = new Date(targetDate).getTime();
  const container = document.getElementById(containerId);

  if (!container) {
    console.error("Container not found");
    return;
  }

  // Create and append countdown items
  const items = ["Days", "Hours", "Minutes"];

  items.forEach(item => {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("countdown-item");

    const valueElement = document.createElement("div");
    valueElement.id = item.toLowerCase();
    valueElement.classList.add("countdown-value");

    const labelElement = document.createElement("div");
    labelElement.classList.add("countdown-label");
    labelElement.textContent = item;

    itemContainer.appendChild(valueElement);
    itemContainer.appendChild(labelElement);
    container.appendChild(itemContainer);
  });

  // Countdown logic
  const interval = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = targetTime - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

    // Format numbers to always display with 2 digits
    const formattedDays = String(days).padStart(2, '0');
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    document.getElementById("days").innerHTML = formattedDays;
    document.getElementById("hours").innerHTML = formattedHours;
    document.getElementById("minutes").innerHTML = formattedMinutes;

    if (timeRemaining < 0) {
      clearInterval(interval);
      document.getElementById("days").innerHTML = '00';
      document.getElementById("hours").innerHTML = '00';
      document.getElementById("minutes").innerHTML = '00';
    }
  }, 1000);
}
