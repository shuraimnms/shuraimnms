// Function to load chapters dynamically
function loadChapters() {
    const chaptersContainer = document.getElementById("chapters");
    bukhariData.chapters.forEach(chapter => {
        const chapterElement = document.createElement("li");
        chapterElement.classList.add("chapter");

        // Display both Arabic and English names
        chapterElement.innerHTML = `
            <span class="chapter-arabic">${chapter.arabic}</span> - 
            <span class="chapter-english">${chapter.english}</span>
        `;

        chapterElement.onclick = () => {
            window.location.href = `topic.html?chapterId=${chapter.id}`;
        };

        chaptersContainer.appendChild(chapterElement);
    });
}

// Function to search through hadiths
function searchHadith() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const searchResultsContainer = document.getElementById('search-results');
    searchResultsContainer.innerHTML = '';  // Clear previous results

    const filteredHadiths = bukhariData.hadiths.filter(hadith => {
        return hadith.arabic.toLowerCase().includes(query) || hadith.english.text.toLowerCase().includes(query);
    });

    if (filteredHadiths.length === 0) {
        searchResultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        filteredHadiths.forEach(hadith => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.innerHTML = `
                <p><strong>Hadith Number:</strong> ${hadith.number}</p>
                <p><strong>Arabic:</strong> ${hadith.arabic}</p>
                <p><strong>English:</strong> ${hadith.english.narrator}: ${hadith.english.text}</p>
            `;
            searchResultsContainer.appendChild(resultItem);
        });
    }
}

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
    loadChapters();
});
