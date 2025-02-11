// Function to request location permission
function requestLocationPermission(callback) {
    if (navigator.permissions) {
        navigator.permissions.query({ name: "geolocation" }).then((permissionStatus) => {
            if (permissionStatus.state === "granted" || permissionStatus.state === "prompt") {
                navigator.geolocation.getCurrentPosition(callback, handleLocationError);
            } else {
                alert("Location access is blocked. Please enable it in your device settings.");
                openSettings();
            }
        });
    } else {
        navigator.geolocation.getCurrentPosition(callback, handleLocationError);
    }
}

// Function to handle location errors
function handleLocationError(error) {
    if (error.code === error.PERMISSION_DENIED) {
        alert("You have denied location access. Please allow it in settings.");
        openSettings();
    } else {
        alert("Error getting location. Please try again.");
    }
}

// Function to open device settings
function openSettings() {
    if (confirm("Would you like to open settings to enable location access?")) {
        window.location.href = "chrome://settings/content/location";
    }
}

// Function to store the current page before redirecting
function saveCurrentPage() {
    sessionStorage.setItem("previousPage", window.location.href);
}

// Function to go back to the previous page
function goBack() {
    const previousPage = sessionStorage.getItem("previousPage");
    if (previousPage) {
        window.location.href = previousPage;
    } else {
        window.history.back();
    }
}

// Function to find nearby masjids
function findNearbyMasjid() {
    saveCurrentPage(); // Save the current page before redirecting
    requestLocationPermission((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        window.location.href = `https://www.google.com/maps/search/masjid/@${lat},${lon},15z`;
    });
}

// Function to find Islamic events
function findIslamicEvents() {
    saveCurrentPage(); // Save the current page before redirecting
    requestLocationPermission(() => {
        window.location.href = `https://www.google.com/search?q=Islamic+events+near+me`;
    });
}

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    themeToggle.innerHTML = document.body.classList.contains("dark-mode")
        ? `<i class="fas fa-sun"></i>`
        : `<i class="fas fa-moon"></i>`;
});

// Handle Back Button
window.addEventListener("pageshow", (event) => {
    if (event.persisted) {
        goBack();
    }
});
