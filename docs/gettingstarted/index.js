// Function to check internet connection status
function updateConnectionStatus() {
    const statusElement = document.getElementById('connection-status');
    if (navigator.onLine) {
        statusElement.textContent = 'You are online.';
        statusElement.style.color = 'green';
    } else {
        statusElement.innerHTML = `
            <h1>You've got Disconnected.</h1>
            <p>Check your Internet and Try Again.</p>
        `;
        statusElement.style.color = 'red';
    }
}

// Initial check
updateConnectionStatus();

// Event listeners for online/offline events
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);
