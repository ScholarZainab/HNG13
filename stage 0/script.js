// Display current UTC time in HH:MM:SS format
function updateUTCTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    document.getElementById('utc-time').textContent = `${hours}:${minutes}:${seconds} UTC`;
}

// Update time every second
setInterval(updateUTCTime, 1000);
updateUTCTime();
// Display current UTC time in HH:MM:SS format
function updateUTCTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    document.getElementById('utc-time').textContent = `${hours}:${minutes}:${seconds} UTC`;
}

// Update time every second
setInterval(updateUTCTime, 1000);
updateUTCTime();
