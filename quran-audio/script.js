let availableQaris = [];
let selectedQari = "";
let currentPlaying = null;
let surahData = [];
let currentIndex = -1;

// 🔄 Load Available Qaris (Reciters)
async function loadQaris() {
    try {
        const response = await fetch("https://api.quran.com/api/v4/resources/recitations");
        const data = await response.json();
        const qariSelector = document.getElementById("qariSelector");

        qariSelector.innerHTML = "";
        availableQaris = data.recitations;

        availableQaris.forEach(qari => {
            let option = document.createElement("option");
            option.value = qari.id;
            option.textContent = `🎙️ ${qari.reciter_name}`;
            qariSelector.appendChild(option);
        });

        selectedQari = availableQaris[0].id;
        loadSurahs();
    } catch (error) {
        console.error("Error loading Qaris:", error);
        alert("⚠ Error fetching Reciters.");
    }
}

// 📖 Load Surahs
async function loadSurahs() {
    try {
        const response = await fetch("https://api.quran.com/api/v4/chapters");
        const data = await response.json();
        const surahList = document.getElementById("surahList");

        surahList.innerHTML = "";
        surahData = data.chapters;

        data.chapters.forEach((surah, index) => {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<span>${surah.id}. ${surah.name_simple} (${surah.name_arabic})</span>`;
            listItem.onclick = () => playSurah(index);
            surahList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error loading Surahs:", error);
        alert("⚠ Error fetching Surahs.");
    }
}

// 🔍 Search Surah
function filterSurahs() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let listItems = document.getElementById("surahList").getElementsByTagName("li");

    for (let i = 0; i < listItems.length; i++) {
        let text = listItems[i].textContent.toLowerCase();
        listItems[i].style.display = text.includes(input) ? "" : "none";
    }
}

// 🎙️ Update Qari
function updateQari() {
    selectedQari = document.getElementById("qariSelector").value;
}

// 🎵 Play Surah Audio
async function playSurah(index) {
    if (index < 0 || index >= surahData.length) return;

    currentIndex = index;
    let surahID = surahData[index].id;
    const apiUrl = `https://api.quran.com/api/v4/chapter_recitations/${selectedQari}/${surahID}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const audioPlayer = document.getElementById("audioPlayer");

        if (data.audio_file && data.audio_file.audio_url) {
            document.getElementById("playingSurah").textContent = `🎵 Now Playing: ${surahData[index].name_simple}`;
            audioPlayer.src = data.audio_file.audio_url;
            audioPlayer.play();
        }
    } catch (error) {
        console.error("Error playing Surah audio:", error);
    }
}

// ⏮ Previous Surah
function previousSurah() {
    playSurah(currentIndex - 1);
}

// ⏭ Next Surah
function nextSurah() {
    playSurah(currentIndex + 1);
}

// 🔄 Load Qaris on Page Load
window.onload = loadQaris;
