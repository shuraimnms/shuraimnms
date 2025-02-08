document.addEventListener("DOMContentLoaded", function() {
    const now = new Date();
    const month = now.getMonth(); // Get current month (0 = Jan, 11 = Dec)

    if (month === 8) { // Example: Ramadan month (adjust based on the Hijri calendar)
        alert("📢 Reminder: Taraweeh prayers are live from Makkah & Madinah. Click to watch!");
    }

    if (month === 11) { // Example: Dhul-Hijjah (Hajj season)
        alert("🕋 Hajj Season Alert: Watch the live pilgrimage now from Makkah!");
    }
});
