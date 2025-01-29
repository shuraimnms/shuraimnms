// Sample data for Surahs and Juzz
const surahs = [
    
        { "id": 1, "name": "الفاتحة", "ayahs": 7 },
        { "id": 2, "name": "البقرة", "ayahs": 286 },
        { "id": 3, "name": "آل عمران", "ayahs": 200 },
        { "id": 4, "name": "النساء", "ayahs": 176 },
        { "id": 5, "name": "المائدة", "ayahs": 120 },
        { "id": 6, "name": "الأنعام", "ayahs": 165 },
        { "id": 7, "name": "الأعراف", "ayahs": 206 },
        { "id": 8, "name": "الأنفال", "ayahs": 75 },
        { "id": 9, "name": "التوبة", "ayahs": 129 },
        { "id": 10, "name": "يونس", "ayahs": 109 },
        { "id": 11, "name": "هود", "ayahs": 123 },
        { "id": 12, "name": "يوسف", "ayahs": 111 },
        { "id": 13, "name": "الرعد", "ayahs": 43 },
        { "id": 14, "name": "إبراهيم", "ayahs": 52 },
        { "id": 15, "name": "الحجر", "ayahs": 99 },
        { "id": 16, "name": "النحل", "ayahs": 128 },
        { "id": 17, "name": "الإسراء", "ayahs": 111 },
        { "id": 18, "name": "الكهف", "ayahs": 110 },
        { "id": 19, "name": "مريم", "ayahs": 98 },
        { "id": 20, "name": "طه", "ayahs": 135 },
        { "id": 21, "name": "الأنبياء", "ayahs": 112 },
        { "id": 22, "name": "الحج", "ayahs": 78 },
        { "id": 23, "name": "المؤمنون", "ayahs": 118 },
        { "id": 24, "name": "النور", "ayahs": 64 },
        { "id": 25, "name": "الفرقان", "ayahs": 77 },
        { "id": 26, "name": "الشعراء", "ayahs": 227 },
        { "id": 27, "name": "النمل", "ayahs": 93 },
        { "id": 28, "name": "القصص", "ayahs": 88 },
        { "id": 29, "name": "العنكبوت", "ayahs": 69 },
        { "id": 30, "name": "الروم", "ayahs": 60 },
        { "id": 31, "name": "لقمان", "ayahs": 34 },
        { "id": 32, "name": "السجدة", "ayahs": 30 },
        { "id": 33, "name": "الأحزاب", "ayahs": 73 },
        { "id": 34, "name": "سبأ", "ayahs": 54 },
        { "id": 35, "name": "فاطر", "ayahs": 45 },
        { "id": 36, "name": "يس", "ayahs": 83 },
        { "id": 37, "name": "الصافات", "ayahs": 182 },
        { "id": 38, "name": "ص", "ayahs": 88 },
        { "id": 39, "name": "الزمر", "ayahs": 75 },
        { "id": 40, "name": "غافر", "ayahs": 85 },
        { "id": 41, "name": "فصلت", "ayahs": 54 },
        { "id": 42, "name": "الشورى", "ayahs": 53 },
        { "id": 43, "name": "الزخرف", "ayahs": 89 },
        { "id": 44, "name": "الدخان", "ayahs": 59 },
        { "id": 45, "name": "الجاثية", "ayahs": 37 },
        { "id": 46, "name": "الأحقاف", "ayahs": 35 },
        { "id": 47, "name": "محمد", "ayahs": 38 },
        { "id": 48, "name": "الفتح", "ayahs": 29 },
        { "id": 49, "name": "الحجرات", "ayahs": 18 },
        { "id": 50, "name": "ق", "ayahs": 45 },
        { "id": 51, "name": "الذاريات", "ayahs": 60 },
        { "id": 52, "name": "الطور", "ayahs": 49 },
        { "id": 53, "name": "النجم", "ayahs": 62 },
        { "id": 54, "name": "القمر", "ayahs": 55 },
        { "id": 55, "name": "الرحمن", "ayahs": 78 },
        { "id": 56, "name": "الواقعة", "ayahs": 96 },
        { "id": 57, "name": "الحديد", "ayahs": 29 },
        { "id": 58, "name": "المجادلة", "ayahs": 22 },
        { "id": 59, "name": "الحشر", "ayahs": 24 },
        { "id": 60, "name": "الممتحنة", "ayahs": 13 },
        { "id": 61, "name": "الصف", "ayahs": 14 },
        { "id": 62, "name": "الجمعة", "ayahs": 11 },
        { "id": 63, "name": "المنافقون", "ayahs": 11 },
        { "id": 64, "name": "التغابن", "ayahs": 18 },
        { "id": 65, "name": "الطلاق", "ayahs": 12 },
        { "id": 66, "name": "التحريم", "ayahs": 12 },
        { "id": 67, "name": "الملك", "ayahs": 30 },
        { "id": 68, "name": "القلم", "ayahs": 52 },
        { "id": 69, "name": "الحاقة", "ayahs": 52 },
        { "id": 70, "name": "المعارج", "ayahs": 44 },
        { "id": 71, "name": "نوح", "ayahs": 28 },
        { "id": 72, "name": "الجن", "ayahs": 28 },
        { "id": 73, "name": "المزمل", "ayahs": 20 },
        { "id": 74, "name": "المدثر", "ayahs": 56 },
        { "id": 75, "name": "القيامة", "ayahs": 40 },
        { "id": 76, "name": "الإنسان", "ayahs": 31 },
        { "id": 77, "name": "المرسلات", "ayahs": 50 },
        { "id": 78, "name": "النبأ", "ayahs": 40 },
        { "id": 79, "name": "النازعات", "ayahs": 46 },
        { "id": 80, "name": "عبس", "ayahs": 42 },
        { "id": 81, "name": "التكوير", "ayahs": 29 },
        { "id": 82, "name": "الإنفطار", "ayahs": 19 },
        { "id": 83, "name": "المطففين", "ayahs": 36 },
        { "id": 84, "name": "الإنشقاق", "ayahs": 25 },
        { "id": 85, "name": "البروج", "ayahs": 22 },
        { "id": 86, "name": "الطارق", "ayahs": 17 },
        { "id": 87, "name": "الأعلى", "ayahs": 19 },
        { "id": 88, "name": "الغاشية", "ayahs": 26 },
        { "id": 89, "name": "الفجر", "ayahs": 30 },
        { "id": 90, "name": "البلد", "ayahs": 20 },
        { "id": 91, "name": "الشمس", "ayahs": 15 },
        { "id": 92, "name": "الليل", "ayahs": 21 },
        { "id": 93, "name": "الضحى", "ayahs": 11 },
        { "id": 94, "name": "الشرح", "ayahs": 8 },
        { "id": 95, "name": "التين", "ayahs": 8 },
        { "id": 96, "name": "العلق", "ayahs": 19 },
        { "id": 97, "name": "القدر", "ayahs": 5 },
        { "id": 98, "name": "البينة", "ayahs": 8 },
        { "id": 99, "name": "الزلزلة", "ayahs": 8 },
        { "id": 100, "name": "العاديات", "ayahs": 11 },
        { "id": 101, "name": "القارعة", "ayahs": 11 },
        { "id": 102, "name": "التكاثر", "ayahs": 8 },
        { "id": 103, "name": "العصر", "ayahs": 3 },
        { "id": 104, "name": "الهمزة", "ayahs": 9 },
        { "id": 105, "name": "الفيل", "ayahs": 5 },
        { "id": 106, "name": "قريش", "ayahs": 4 },
        { "id": 107, "name": "الماعون", "ayahs": 7 },
        { "id": 108, "name": "الكوثر", "ayahs": 3 },
        { "id": 109, "name": "الكافرون", "ayahs": 6 },
        { "id": 110, "name": "النصر", "ayahs": 3 },
        { "id": 111, "name": "المسد", "ayahs": 5 },
        { "id": 112, "name": "الإخلاص", "ayahs": 4 },
        { "id": 113, "name": "الفلق", "ayahs": 5 },
        { "id": 114, "name": "الناس", "ayahs": 6 }
      
    ];  // Add all 114 Surahs

    const juzz = [
        { id: 1, name: "الجزء ١", start: 1, end: 148 },
        { id: 2, name: "الجزء ٢", start: 149, end: 259 },
        { id: 3, name: "الجزء ٣", start: 260, end: 386 },
        { id: 4, name: "الجزء ٤", start: 387, end: 516 },
        { id: 5, name: "الجزء ٥", start: 517, end: 640 },
        { id: 6, name: "الجزء ٦", start: 641, end: 750 },
        { id: 7, name: "الجزء ٧", start: 751, end: 899 },
        { id: 8, name: "الجزء ٨", start: 900, end: 1041 },
        { id: 9, name: "الجزء ٩", start: 1042, end: 1200 },
        { id: 10, name: "الجزء ١٠", start: 1201, end: 1329 },
        { id: 11, name: "الجزء ١١", start: 1330, end: 1479 },
        { id: 12, name: "الجزء ١٢", start: 1480, end: 1649 },
        { id: 13, name: "الجزء ١٣", start: 1650, end: 1802 },
        { id: 14, name: "الجزء ١٤", start: 1803, end: 2029 },
        { id: 15, name: "الجزء ١٥", start: 2030, end: 2214 },
        { id: 16, name: "الجزء ١٦", start: 2215, end: 2483 },
        { id: 17, name: "الجزء ١٧", start: 2484, end: 2673 },
        { id: 18, name: "الجزء ١٨", start: 2674, end: 2875 },
        { id: 19, name: "الجزء ١٩", start: 2876, end: 3214 },
        { id: 20, name: "الجزء ٢٠", start: 3215, end: 3414 },
        { id: 21, name: "الجزء ٢١", start: 3415, end: 3563 },
        { id: 22, name: "الجزء ٢٢", start: 3564, end: 3833 },
        { id: 23, name: "الجزء ٢٣", start: 3834, end: 4088 },
        { id: 24, name: "الجزء ٢٤", start: 4089, end: 4257 },
        { id: 25, name: "الجزء ٢٥", start: 4258, end: 4505 },
        { id: 26, name: "الجزء ٢٦", start: 4506, end: 4705 },
        { id: 27, name: "الجزء ٢٧", start: 4706, end: 5105 },
        { id: 28, name: "الجزء ٢٨", start: 5106, end: 5241 },
        { id: 29, name: "الجزء ٢٩", start: 5242, end: 5672 },
        { id: 30, name: "الجزء ٣٠", start: 5673, end: 6236 },
    ];
    
    
    // Audio Player Setup
const audioPlayer = document.getElementById("audio-player");
const reciterSelect = document.getElementById("reciter-select");

// Default Reciter ID (Change as needed)
let reciterId = "ar.alafasy"; // Mishary Rashid Alafasy

// Fetch and Load Surah Audio
function loadSurahAudio(surahId) {
    const apiUrl = `https://api.quran.com/api/v4/chapter_recitations/${reciterId}/${surahId}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.audio_file) {
                audioPlayer.src = data.audio_file.audio_url;
                audioPlayer.play();
            } else {
                console.error("Audio not found for this Surah.");
            }
        })
        .catch(error => console.error("Error loading Surah audio:", error));
}

// Fetch and Load Juzz Audio
function loadJuzzAudio(juzzId) {
    const apiUrl = `https://api.quran.com/api/v4/juz_recitations/${reciterId}/${juzzId}`;
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.audio_file) {
                audioPlayer.src = data.audio_file.audio_url;
                audioPlayer.play();
            } else {
                console.error("Audio not found for this Juzz.");
            }
        })
        .catch(error => console.error("Error loading Juzz audio:", error));
}

// Change Reciter
if (reciterSelect) {
    reciterSelect.addEventListener("change", (event) => {
        reciterId = event.target.value;
        const surahId = new URLSearchParams(window.location.search).get("surah");
        const juzzId = new URLSearchParams(window.location.search).get("juzz");

        if (surahId) loadSurahAudio(surahId);
        if (juzzId) loadJuzzAudio(juzzId);
    });
}

// Load Surah or Juzz Audio on Page Load
const surahId = new URLSearchParams(window.location.search).get("surah");
const juzzId = new URLSearchParams(window.location.search).get("juzz");

if (surahId) loadSurahAudio(surahId);
if (juzzId) loadJuzzAudio(juzzId);

// Load Folders for Surah and Juzz
const surahFolder = document.getElementById("surah-folder");
const juzzFolder = document.getElementById("juzz-folder");

if (surahFolder) {
    surahFolder.addEventListener("click", () => {
        window.location.href = "list.html?type=surah";
    });
}

if (juzzFolder) {
    juzzFolder.addEventListener("click", () => {
        window.location.href = "list.html?type=juzz";
    });
}

// Load List Page (Surah or Juzz)
const listTitle = document.getElementById("list-title");
const listContainer = document.getElementById("list-container");

if (listContainer) {
    const type = new URLSearchParams(window.location.search).get("type");
    if (type === "surah") {
        listTitle.textContent = "Surahs";
        surahs.forEach(surah => {
            const item = document.createElement("div");
            item.className = "list-item";
            item.innerHTML = `
                <h3>${surah.name}</h3>
                <p>${surah.ayahs} verses</p>
            `;
            item.addEventListener("click", () => {
                window.location.href = `quran.html?surah=${surah.id}`;
            });
            listContainer.appendChild(item);
        });
    } else if (type === "juzz") {
        listTitle.textContent = "Juzz";
        juzz.forEach(juz => {
            const item = document.createElement("div");
            item.className = "list-item";
            item.innerHTML = `
                <h3>Juzz ${juz.id}: ${juz.name}</h3>
                <p>Verses ${juz.start}-${juz.end}</p>
            `;
            item.addEventListener("click", () => {
                window.location.href = `quran.html?juzz=${juz.id}`;
            });
            listContainer.appendChild(item);
        });
    }
}

// Load Quran Page with pagination
const quranText = document.getElementById("quran-text");
const surahName = document.getElementById("surah-name");

if (quranText) {
    const surahId = new URLSearchParams(window.location.search).get("surah");
    if (surahId) {
        fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
            .then(response => response.json())
            .then(data => {
                surahName.textContent = data.data.englishName;
                const verses = data.data.ayahs;

                // Function to paginate the verses (13 verses per page)
                const paginateVerses = (verses, linesPerPage) => {
                    const pages = [];
                    for (let i = 0; i < verses.length; i += linesPerPage) {
                        pages.push(verses.slice(i, i + linesPerPage));
                    }
                    return pages;
                };

                // Paginate the verses into 13 lines per page
                const paginatedVerses = paginateVerses(verses, 13);
                let currentPage = 0;

                const renderPage = (pageIndex) => {
                    quranText.innerHTML = '';  // Clear previous content
                    const pageVerses = paginatedVerses[pageIndex];
                    pageVerses.forEach(verse => {
                        const verseElement = document.createElement("p");
                        verseElement.innerHTML = `
                            <span class="ayat-number">[${verse.number}]</span> ${verse.text}
                        `;
                        quranText.appendChild(verseElement);
                    });
                };

                renderPage(currentPage);

                // Pagination buttons
                const prevPageButton = document.getElementById("prev-page");
                const nextPageButton = document.getElementById("next-page");

                if (prevPageButton) {
                    prevPageButton.addEventListener("click", () => {
                        if (currentPage > 0) {
                            currentPage--;
                            renderPage(currentPage);
                        }
                    });
                }

                if (nextPageButton) {
                    nextPageButton.addEventListener("click", () => {
                        if (currentPage < paginatedVerses.length - 1) {
                            currentPage++;
                            renderPage(currentPage);
                        }
                    });
                }
            })
            .catch(error => {
                console.error("Error loading Surah:", error);
            });
    }

    // Handling Juzz
    const juzzId = new URLSearchParams(window.location.search).get("juzz");
    if (juzzId) {
        fetch(`https://api.alquran.cloud/v1/juz/${juzzId}`)
            .then(response => response.json())
            .then(data => {
                const verses = data.data.ayahs;
                const surahNames = data.data.surah_names;

                // Function to paginate the verses (13 verses per page)
                const paginateVerses = (verses, linesPerPage) => {
                    const pages = [];
                    for (let i = 0; i < verses.length; i += linesPerPage) {
                        pages.push(verses.slice(i, i + linesPerPage));
                    }
                    return pages;
                };

                // Paginate the verses into 13 lines per page
                const paginatedVerses = paginateVerses(verses, 13);
                let currentPage = 0;

                const renderPage = (pageIndex) => {
                    quranText.innerHTML = '';  // Clear previous content
                    const pageVerses = paginatedVerses[pageIndex];
                    pageVerses.forEach(verse => {
                        const verseElement = document.createElement("p");
                        verseElement.innerHTML = `
                            <span class="ayat-number">[${verse.number}]</span> ${verse.text}
                        `;
                        quranText.appendChild(verseElement);
                    });
                };

                renderPage(currentPage);

                // Pagination buttons
                const prevPageButton = document.getElementById("prev-page");
                const nextPageButton = document.getElementById("next-page");

                if (prevPageButton) {
                    prevPageButton.addEventListener("click", () => {
                        if (currentPage > 0) {
                            currentPage--;
                            renderPage(currentPage);
                        }
                    });
                }

                if (nextPageButton) {
                    nextPageButton.addEventListener("click", () => {
                        if (currentPage < paginatedVerses.length - 1) {
                            currentPage++;
                            renderPage(currentPage);
                        }
                    });
                }
            })
            .catch(error => {
                console.error("Error loading Juzz:", error);
            });
    }
}

// Dark mode toggle
const themeToggleButton = document.getElementById("theme-toggle");

if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// Search functionality for Surah and Juzz
function searchList() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const items = document.querySelectorAll(".list-item");

    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchQuery)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

// Event listener for search input
const searchInput = document.getElementById("search-bar");
if (searchInput) {
    searchInput.addEventListener("input", searchList);
}
