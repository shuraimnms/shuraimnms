// Load chapters into the main page (index.html)
function loadChapters() {
    const chaptersList = document.getElementById("chapters");
    abuDawoodChapters.forEach(chapter => {
        const listItem = document.createElement("li");
        listItem.textContent = chapter.arabic_title + " - " + chapter.title;
        listItem.className = "chapter";
        listItem.onclick = function () {
            loadTopic(chapter.id);
        };
        chaptersList.appendChild(listItem);
    });
}

// Load a specific topic (chapter) on the topic.html page
function loadTopic(chapterId) {
    const topicTitle = document.getElementById("topic-title");
    const hadithsContainer = document.getElementById("hadiths");

    // Set the topic title (chapter name)
    const chapter = abuDawoodChapters.find(ch => ch.id === chapterId);
    topicTitle.textContent = chapter.arabic_title + " - " + chapter.title;

    // Display the hadiths for the selected chapter
    const hadiths = abuDawoodHadiths[chapterId];
    hadithsContainer.innerHTML = ""; // Clear previous hadiths
    hadiths.forEach(hadith => {
        const hadithDiv = document.createElement("div");
        hadithDiv.className = "hadith";
        hadithDiv.innerHTML = `<strong>Arabic:</strong> ${hadith.arabic}<br><strong>English:</strong> ${hadith.english}`;
        hadithsContainer.appendChild(hadithDiv);
    });
}

// Search functionality
function searchHadith() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const searchResultsContainer = document.getElementById("search-results");

    // Filter hadiths based on the search term
    const results = [];
    abuDawoodChapters.forEach(chapter => {
        const hadiths = abuDawoodHadiths[chapter.id];
        hadiths.forEach(hadith => {
            if (hadith.arabic.toLowerCase().includes(searchTerm) || hadith.english.toLowerCase().includes(searchTerm)) {
                results.push({ chapter: chapter.title, hadith: hadith });
            }
        });
    });

    // Display search results
    searchResultsContainer.innerHTML = "";
    if (results.length > 0) {
        results.forEach(result => {
            const resultDiv = document.createElement("div");
            resultDiv.className = "search-result";
            resultDiv.innerHTML = `<strong>Chapter:</strong> ${result.chapter}<br><strong>Hadith:</strong> ${result.hadith.english}`;
            searchResultsContainer.appendChild(resultDiv);
        });
    } else {
        searchResultsContainer.innerHTML = "No results found.";
    }
}

// Initialize the page
if (document.getElementById("chapters")) {
    loadChapters();
}
