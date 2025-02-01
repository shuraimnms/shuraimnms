// DOM Elements
const surahListElement = document.getElementById("surah-list");
const qariSelector = document.getElementById("qari");
const audioElement = document.getElementById("audio");
const downloadLink = document.getElementById("download-link");

// Qari Paths
const qariPaths = {
  afs: "afs", // Mishary Rashid Alafasy
  basit: "basit", // Abdul Basit
  shuraim: "shuraim", // Saud Al-Shuraim
  maher: "maher", // Maher Al-Muaiqly
};

// Fetch Surahs from API
async function fetchSurahs() {
  try {
    const response = await fetch("https://api.alquran.cloud/v1/chapters");
    const data = await response.json();
    const surahs = data.data;
    displaySurahs(surahs);
  } catch (error) {
    console.error("Error fetching Surahs:", error);
    surahListElement.innerHTML = "<li>Failed to load Surahs. Please try again later.</li>";
  }
}

// Display Surahs in the List
function displaySurahs(surahs) {
  surahListElement.innerHTML = surahs
    .map(
      (surah) => `
      <li>
        <span>${surah.name} (${surah.englishName})</span>
        <button onclick="playSurah(${surah.id})">Play</button>
      </li>
    `
    )
    .join("");
}

// Play Surah Audio
function playSurah(surahId) {
  const qari = qariSelector.value;
  const audioUrl = `https://server7.mp3quran.net/${qariPaths[qari]}/${surahId}.mp3`;

  // Set audio source and play
  audioElement.src = audioUrl;
  audioElement.play();

  // Update download link
  downloadLink.href = audioUrl;
  downloadLink.style.display = "inline-block";
}

// Handle Qari Change
qariSelector.addEventListener("change", () => {
  audioElement.pause();
  audioElement.src = "";
  downloadLink.style.display = "none";
});

// Initialize
fetchSurahs();