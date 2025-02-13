document.addEventListener("DOMContentLoaded", () => {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    createRozaTracker();
    updateRozaProgress();
    applySavedPreferences();
    getLocationAndFetchTimings();
}

function setupEventListeners() {
    const modeToggle = document.getElementById("dark-mode-toggle");
    modeToggle.addEventListener("click", toggleDarkMode);
    document.getElementById("toggle-language").addEventListener("click", toggleLanguage);
    document.getElementById("calculate-zakat").addEventListener("click", calculateZakat);
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    const modeToggle = document.getElementById("dark-mode-toggle");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", true);
        modeToggle.textContent = "Light Mode";
    } else {
        localStorage.setItem("darkMode", false);
        modeToggle.textContent = "Dark Mode";
    }
}

function toggleLanguage() {
    const currentLang = document.getElementById("title").textContent;
    if (currentLang === "Ramadan Tracker") {
        document.getElementById("title").textContent = "رمضان ٹریکر";
    } else {
        document.getElementById("title").textContent = "Ramadan Tracker";
    }
}

function calculateZakat() {
    const amount = parseFloat(document.getElementById("zakat-input").value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("zakat-result").textContent = "Please enter a valid amount.";
        return;
    }
    const zakat = (amount * 2.5) / 100;
    document.getElementById("zakat-result").textContent = `Your Zakat: $${zakat.toFixed(2)}`;
}

function getLocationAndFetchTimings() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(fetchPrayerTimes, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function fetchPrayerTimes(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiURL = `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            const timings = data.data.timings;
            document.getElementById("suhur-time").textContent = timings.Fajr;
            document.getElementById("iftar-time").textContent = timings.Maghrib;
        })
        .catch(error => console.error("Error fetching prayer times:", error));
}

function applySavedPreferences() {
    document.body.classList.add("dark-mode"); // Always start in dark mode
    const modeToggle = document.getElementById("dark-mode-toggle");
    modeToggle.textContent = "Light Mode"; // Initial button text
}

function createRozaTracker() {
    const rozaDays = document.getElementById("calendar");
    rozaDays.innerHTML = "";

    for (let i = 1; i <= 30; i++) {
        let dayButton = document.createElement("button");
        dayButton.classList.add("day");
        dayButton.innerText = i;

        if (localStorage.getItem("roza-" + i) === "completed") {
            dayButton.classList.add("completed");
        }

        dayButton.addEventListener("click", () => {
            dayButton.classList.toggle("completed");

            if (dayButton.classList.contains("completed")) {
                localStorage.setItem("roza-" + i, "completed");
            } else {
                localStorage.removeItem("roza-" + i);
            }

            updateRozaProgress();
        });

        rozaDays.appendChild(dayButton);
    }
}

function updateRozaProgress() {
    let completedFasts = 0;

    for (let i = 1; i <= 30; i++) {
        if (localStorage.getItem("roza-" + i) === "completed") {
            completedFasts++;
        }
    }

    let progressPercent = Math.round((completedFasts / 30) * 100);
    document.getElementById("roza-progress").innerText = `${progressPercent}%`;
    document.getElementById("total-fasts").innerText = `${completedFasts}/30`;
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}
