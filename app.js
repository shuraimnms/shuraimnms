// Display Gregorian Date
const today = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const gregorianDate = today.toLocaleDateString('en-US', options);
document.getElementById('gregorian-date').innerText = `Gregorian Date: ${gregorianDate}`;

// Fetch Hijri Date from API
async function fetchHijriDate() {
    try {
        const response = await fetch('https://api.aladhan.com/v1/gToH?date=' + today.toISOString().split('T')[0]);
        const data = await response.json();
        const hijriDate = data.data.hijri.date; // Example: "10-06-1445"
        const hijriWeekday = data.data.hijri.weekday.en; // Example: "Tuesday"
        document.getElementById('hijri-date').innerText = `Hijri Date: ${hijriWeekday}, ${hijriDate}`;
    } catch (error) {
        console.error('Error fetching Hijri date:', error);
        document.getElementById('hijri-date').innerText = 'Hijri Date: Unable to fetch';
    }
}

fetchHijriDate();

// app.js

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const duaContainer = document.getElementById("daily-dua");

    // Duas for each day of the week
    const weeklyDuas = {
        Monday: "اللهم اجعلنا من الذين يسيرون على صراطك المستقيم.",
        Tuesday: "اللهم ارزقنا العلم النافع والعمل الصالح.",
        Wednesday: "اللهم اجعلنا من الذين يتبعون هديك.",
        Thursday: "اللهم اجعل يومنا هذا مليئاً بالبركة والتوفيق.",
        Friday: "اللهم اجعلنا من الذين يسمعون القول فيتبعون أحسنه.",
        Saturday: "اللهم ارزقنا السكينة في قلوبنا، والطمأنينة في حياتنا.",
        Sunday: "اللهم اجعلنا من عبادك الصالحين."
    };

    // Get today's day name
    const today = new Date();
    const options = { weekday: "long" }; // Format to get the full weekday name
    const dayName = today.toLocaleDateString("en-US", options); // e.g., "Monday"

    // Display the dua for the current day
    if (duaContainer) {
        duaContainer.innerHTML = `
            <p class="text-gray-700 text-lg font-semibold">
                <span class="text-green-600">${dayName}:</span> ${weeklyDuas[dayName] || "No dua found for today!"}
            </p>
        `;
    } else {
        console.error("Dua container not found!");
    }
});

function openSettings() {
    // Add your settings panel code here
    console.log("Settings button clicked!");
}
