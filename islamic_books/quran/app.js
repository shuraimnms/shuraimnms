let navigationStack = []; // To track navigation history

// Load Surah Index
async function showSurahIndex() {
  const response = await fetch("https://api.alquran.cloud/v1/surah");
  const data = await response.json();
  const surahs = data.data;

  const surahList = document.getElementById("surahs");
  surahList.innerHTML = "";
  surahs.forEach((surah) => {
    const item = document.createElement("li");
    item.textContent = `${surah.number}. ${surah.englishName} (${surah.name})`;
    item.onclick = () => showContent(surah.number, "surah");
    surahList.appendChild(item);
  });

  navigateToSection("surah-list");
}

// Load Juzz Index
async function showJuzzIndex() {
  const juzzList = document.getElementById("juzz");
  juzzList.innerHTML = "";

  for (let i = 1; i <= 30; i++) {
    const item = document.createElement("li");
    item.textContent = `Juzz ${i}`;
    item.onclick = () => showContent(i, "juzz");
    juzzList.appendChild(item);
  }

  navigateToSection("juzz-list");
}

// Show Surah or Juzz Content
async function showContent(number, type) {
  const url = type === "surah"
    ? `https://api.alquran.cloud/v1/surah/${number}`
    : `https://api.alquran.cloud/v1/juz/${number}`;
  const response = await fetch(url);
  const data = await response.json();

  const contentTitle = document.getElementById("content-title");
  contentTitle.textContent = type === "surah"
    ? `Surah ${data.data.englishName} (${data.data.name})`
    : `Juzz ${number}`;

  const ayahsContainer = document.getElementById("ayahs");
  ayahsContainer.innerHTML = "";

  const ayahs = type === "surah" ? data.data.ayahs : data.data.ayahs;
  let ayahCount = 0;

  ayahs.forEach((ayah) => {
    const ayahDiv = document.createElement("div");
    ayahDiv.innerHTML = `<strong>${ayah.numberInSurah || ayah.number}</strong>. ${ayah.text}`;
    ayahsContainer.appendChild(ayahDiv);

    ayahCount++;
    if (ayahCount % 15 === 0) {
      const pageBreak = document.createElement("hr");
      ayahsContainer.appendChild(pageBreak);
    }
  });

  navigateToSection("content");
}

// Show Bookmarks
function showBookmarks() {
  navigateToSection("bookmarks");
}

// Show Saved Verses
function showSavedVerses() {
  navigateToSection("saved-verses");
}

// Navigate to a section
function navigateToSection(sectionId) {
  navigationStack.push(sectionId); // Add current section to stack

  document.querySelectorAll("main section").forEach((section) => {
    section.style.display = section.id === sectionId ? "block" : "none";
  });

  // Show "Back" button if not on the first page
  const backButton = document.getElementById("back-button");
  backButton.style.display = navigationStack.length > 1 ? "block" : "none";
}

// Go Back to the Previous Section
function goBack() {
  if (navigationStack.length > 1) {
    navigationStack.pop(); // Remove the current section
    const previousSection = navigationStack[navigationStack.length - 1];
    navigateToSection(previousSection);
  }
}
