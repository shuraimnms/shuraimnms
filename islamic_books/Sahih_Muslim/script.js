// Function to load Hadith books dynamically from the API
function loadHadithList(language) {
    const hadithListContainer = document.getElementById('hadith-list');
    hadithListContainer.innerHTML = ''; // Clear the list

    // Replace with the actual API URL
    const apiUrl = 'https://example.com/api/hadith-books';  // Replace with your real API URL

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Check if the API returned a list of books
            if (Array.isArray(data)) {
                data.forEach(hadith => {
                    // Only fetch the name based on selected language
                    const bookName = hadith[language + '_name']; // For example: 'english_name', 'arabic_name', 'urdu_name'
                    const startVerse = hadith.start_verse;
                    const endVerse = hadith.end_verse;

                    // Create the list item
                    const hadithItem = document.createElement('div');
                    hadithItem.classList.add('hadith-item');

                    hadithItem.innerHTML = `
                        <p><strong>${bookName}</strong></p>
                        <p>Start: ${startVerse} to End: ${endVerse}</p>
                    `;

                    // When clicked, navigate to the content page (implement your own page)
                    hadithItem.onclick = function() {
                        localStorage.setItem('currentHadith', JSON.stringify(hadith)); // Save selected Hadith
                        window.location.href = 'hadith-content.html'; // Redirect to content page
                    };

                    // Append the item to the list
                    hadithListContainer.appendChild(hadithItem);
                });
            } else {
                hadithListContainer.innerHTML = '<p>No data found.</p>';
            }
        })
        .catch(error => {
            console.error('Error loading Hadith books:', error);
            hadithListContainer.innerHTML = '<p>Error loading data. Please try again later.</p>';
        });
}

// Function to change language (Arabic, Urdu, or English)
function changeLanguage() {
    const language = document.getElementById('language-select').value;
    loadHadithList(language);
}

// Load Hadith list in the default language (English)
window.onload = function() {
    loadHadithList('english'); // Default language is English
};

// Add event listener for language change
document.getElementById('language-select').addEventListener('change', changeLanguage);
