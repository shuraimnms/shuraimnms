// 🔔 Function to Set Alarms & Save to Local Storage
function setAlarm(type) {
    let alarmTime = type === 'suhur' ? document.getElementById('suhur-time').value : document.getElementById('iftar-time').value;
    if (!alarmTime) {
        alert("Please select a time!");
        return;
    }
    
    localStorage.setItem(type + "-alarm", alarmTime);
    alert(type.charAt(0).toUpperCase() + type.slice(1) + " alarm set for " + alarmTime);
}

// 🕰️ Function to Check & Play Alarm
function checkAlarm() {
    let now = new Date();
    let currentTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

    ['suhur', 'iftar'].forEach(type => {
        let alarmTime = localStorage.getItem(type + "-alarm");
        if (alarmTime === currentTime) {
            playAlarm();
        }
    });
}

// 🔊 Function to Play Alarm Sound
function playAlarm() {
    let alarmSound = document.getElementById('alarm-sound').value;
    let audio = new Audio(alarmSound);
    audio.play();
}

// 🛑 Function to Stop Alarm
function stopAlarm() {
    let audio = new Audio();
    audio.pause();
}

// ✅ Keep Checking Alarm Every Minute
setInterval(checkAlarm, 60000);

// 🕐 Load Saved Alarms on Restart
window.onload = function () {
    document.getElementById('suhur-time').value = localStorage.getItem("suhur-alarm") || "";
    document.getElementById('iftar-time').value = localStorage.getItem("iftar-alarm") || "";
    updateRozaProgress();
};

// 🗓️ Ramadan Roza Tracker
const rozaDays = document.getElementById("roza-days");

// Function to Update Progress
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

// Create 30-Day Roza Tracker
for (let i = 1; i <= 30; i++) {
    let day = document.createElement("div");
    day.classList.add("day");
    day.innerText = i;

    // Check if the fast was completed (stored in localStorage)
    if (localStorage.getItem("roza-" + i) === "completed") {
        day.classList.add("completed");
    }

    // Toggle Completed State on Click
    day.addEventListener("click", () => {
        day.classList.toggle("completed");
        
        if (day.classList.contains("completed")) {
            localStorage.setItem("roza-" + i, "completed");
        } else {
            localStorage.removeItem("roza-" + i);
        }
        
        updateRozaProgress();
    });

    rozaDays.appendChild(day);
}

// Call update function on load
updateRozaProgress();
