
// Array of duas (you can customize the duas as needed)
const dailyDuas = [
    {
        arabic: "اللّهُمَّ أَعِنِّي عَلَىٰ ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
        translation: "O Allah, help me in remembering You, being thankful to You, and worshipping You in the best manner."
    },
    {
        arabic: "اللّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ",
        translation: "O Allah, make me among those who listen to speech and follow the best of it."
    },
    {
        arabic: "اللّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ يَحْتَاجُ إِلَىٰ مَغْفِرَتِكَ",
        translation: "O Allah, forgive me, my parents, and those who are in need of Your forgiveness."
    },
    {
        arabic: "اللّهُمَّ حَبِّبْنِي إِلَىٰ إِيمَانِي وَزَيِّنْهُ فِي قُلُوبِنَا",
        translation: "O Allah, make faith beloved to me and beautify it in my heart."
    },
    {
        arabic: "اللّهُمَّ تَقَبَّلْ صَلَاتَنَا وَأَعْطِنَا أَجْرَ الْمُحْسِنِينَ",
        translation: "O Allah, accept our prayers and grant us the reward of the righteous."
    },
    {
        arabic: "اللّهُمَّ اجْعَلْنِي فِي رَحْمَتِكَ وَمَغْفِرَتِكَ",
        translation: "O Allah, place me in Your mercy and forgiveness."
    },
    {
        arabic: "اللّهُمَّ اجْعَلْنِي مِنَ الصَّابِرِينَ فِي الشِّدَّةِ وَالضِّيقِ",
        translation: "O Allah, make me among those who are patient in times of hardship and distress."
    }
];

// Function to get the current day of the week (0 - Sunday, 6 - Saturday)
function getDuaOfTheDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Get current day (0-6, Sunday to Saturday)
    return dailyDuas[dayOfWeek]; // Return the dua for the corresponding day
}

// Function to dynamically display the dua in the HTML
function displayDailyDua() {
    const duaElement = document.getElementById('daily-dua');
    const dua = getDuaOfTheDay();
    duaElement.innerHTML = `
        <p class="mt-2 text-green-700 font-bold">${dua.arabic}</p>
        <p class="mt-1 text-black-500 font-bold">${dua.translation}</p>
    `;
}

// Call the function to display the dua when the page loads
displayDailyDua();

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
        Monday: "اللهم اجعلنا من التوابين واجعلنا من المتطهرين.",
        Tuesday: "اللهم زدنا علماً نافعاً وعملاً صالحاً.",
        Wednesday: "اللهم اهدنا الصراط المستقيم.",
        Thursday: "اللهم بارك لنا في يومنا هذا واجعله مباركاً.",
        Friday: "اللهم اجعلنا من الذين يستمعون القول فيتبعون أحسنه.",
        Saturday: "اللهم ارزقنا السكينة والطمأنينة في قلوبنا.",
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
  
