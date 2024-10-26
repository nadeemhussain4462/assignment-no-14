const clockElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const toggleModeButton = document.getElementById('toggleMode');
const dayBackground = document.getElementById('dayBackground');
const nightBackground = document.getElementById('nightBackground');

let isNightMode = false;

// Function to update the clock
function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const dateString = now.toLocaleDateString('en-US', options);

    clockElement.textContent = timeString;
    dateElement.textContent = dateString;
}

// Function to toggle between day and night modes
function toggleMode() {
    isNightMode = !isNightMode;
    if (isNightMode) {
        nightBackground.classList.add('active');
        dayBackground.classList.remove('active');
        document.body.classList.replace('bg-gray-100', 'bg-gray-900');
        document.body.classList.replace('text-gray-800', 'text-gray-200');
        toggleModeButton.classList.replace('bg-blue-500', 'bg-blue-700');
    } else {
        dayBackground.classList.add('active');
        nightBackground.classList.remove('active');
        document.body.classList.replace('bg-gray-900', 'bg-gray-100');
        document.body.classList.replace('text-gray-200', 'text-gray-800');
        toggleModeButton.classList.replace('bg-blue-700', 'bg-blue-500');
    }
}

// Set event listener for the button
toggleModeButton.addEventListener('click', toggleMode);
setInterval(updateClock, 1000);
updateClock();
