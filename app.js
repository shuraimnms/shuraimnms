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
  
/// JavaScript to handle content item slider and transition

const contentItems = document.querySelectorAll('.content-item');
let currentIndex = 0;
const totalItems = contentItems.length; // Total number of content items

// Function to move the slider to the next content item
function moveSlider() {
    // Calculate the new position of the slider container
    const newPosition = -(currentIndex * (contentItems[0].offsetWidth + 30)); // Adjusting for margin

    // Apply the translation to the slider container
    document.querySelector('.slider').style.transform = `translateX(${newPosition}px)`;

    // Update the current content item index
    currentIndex++;

    // If we reach the last content item, reset the index to loop
    if (currentIndex === totalItems) {
        currentIndex = 0;
    }
}

// Initial call to move the slider
moveSlider();

// Set the interval to move the slider every 5 seconds
setInterval(moveSlider, 5000);
// Function to get current time and update folder content dynamically
function updateFolderContent() {
    const dynamicFolder = document.getElementById('dynamic-folder');
    const folderTitle = document.getElementById('folder-title');
    const currentTime = new Date();
    const hours = currentTime.getHours();

    // Define time intervals for different Dhikr categories
    if (hours >= 1 && hours < 12) {
        // Morning Azkar (1 AM to 12 PM)
        dynamicFolder.style.backgroundImage = "url('images/morning.jpg')";
        folderTitle.innerText = "Morning Azkar/صبح کی اذکار";
    } else if (hours >= 12 && hours < 16) {
        // Gratitude Dhikr (12 PM to 4 PM)
        dynamicFolder.style.backgroundImage = "url('images/gratitude.jpg')";
        folderTitle.innerText = "Gratitude Dhikr";
    } else if (hours >= 16 && hours < 20) {
        // Evening Dhikr (4 PM to 8 PM)
        dynamicFolder.style.backgroundImage = "url('images/evening.jpg')";
        folderTitle.innerText = "Evening Dhikr";
    } else {
        // Before Sleep Dhikr (8 PM to 1 AM)
        dynamicFolder.style.backgroundImage = "url('images/before_sleep.jpg')";
        folderTitle.innerText = "Before Sleep Dhikr";
    }
}

// Update the content every minute to reflect real-time changes
setInterval(updateFolderContent, 60000);

// Initial content update based on current time
updateFolderContent();
