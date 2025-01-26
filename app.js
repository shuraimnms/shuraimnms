document.addEventListener("DOMContentLoaded", () => {
  // Quiz questions for each day of the week
  const dailyQuizzes = {
    Monday: [
      {
        question: "What is the first surah of the Quran?",
        options: ["Surah Al-Baqarah", "Surah Al-Fatihah", "Surah Al-Ikhlas", "Surah An-Nas"],
        answer: 1,
      },
      {
        question: "What does 'Zakat' mean?",
        options: ["Charity", "Fasting", "Prayer", "Pilgrimage"],
        answer: 0,
      },
    ],
    Tuesday: [
      {
        question: "How many times do Muslims pray daily?",
        options: ["3", "5", "7", "6"],
        answer: 1,
      },
      {
        question: "What is the name of the holy book in Islam?",
        options: ["Torah", "Bible", "Quran", "Vedas"],
        answer: 2,
      },
    ],
    Wednesday: [
      {
        question: "What is the direction Muslims face during prayer?",
        options: ["East", "West", "Kaaba", "Jerusalem"],
        answer: 2,
      },
      {
        question: "What is the meaning of 'Islam'?",
        options: ["Peace", "Charity", "Submission", "Unity"],
        answer: 2,
      },
    ],
    Thursday: [
      {
        question: "What is the night journey of Prophet Muhammad (PBUH) called?",
        options: ["Hijrah", "Isra and Miraj", "Hajj", "Umrah"],
        answer: 1,
      },
      {
        question: "What month do Muslims fast in?",
        options: ["Shawwal", "Ramadan", "Muharram", "Rabi al-Awwal"],
        answer: 1,
      },
    ],
    Friday: [
      {
        question: "What is the special prayer on Friday called?",
        options: ["Fajr", "Jumu'ah", "Taraweeh", "Eid Salah"],
        answer: 1,
      },
      {
        question: "How many chapters are there in the Quran?",
        options: ["100", "114", "120", "124"],
        answer: 1,
      },
    ],
    Saturday: [
      {
        question: "What is the fifth pillar of Islam?",
        options: ["Zakat", "Hajj", "Shahada", "Salah"],
        answer: 1,
      },
      {
        question: "What is the Arabic word for fasting?",
        options: ["Sawm", "Salat", "Shirk", "Sadaqah"],
        answer: 0,
      },
    ],
    Sunday: [
      {
        question: "What is the reward for fasting during Ramadan?",
        options: ["Forgiveness", "Wealth", "Health", "Knowledge"],
        answer: 0,
      },
      {
        question: "What does 'Iman' mean?",
        options: ["Faith", "Peace", "Charity", "Unity"],
        answer: 0,
      },
    ],
  };

  // Get the current day of the week
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const quizQuestions = dailyQuizzes[currentDay] || [];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionElement = document.getElementById("quiz-question");
  const optionsElement = document.getElementById("quiz-options");
  const feedbackElement = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("next-question");
  const progressBar = document.getElementById("progress-bar");
  const scoreElement = document.getElementById("quiz-score");
  const restartButton = document.getElementById("restart-quiz");

  const loadQuestion = () => {
    if (!quizQuestions.length) {
      questionElement.textContent = "No quiz available for today. Come back tomorrow!";
      optionsElement.innerHTML = "";
      progressBar.style.width = "0%";
      return;
    }

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = `Q${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = "option-button";
      button.onclick = () => checkAnswer(index, button);
      optionsElement.appendChild(button);
    });

    feedbackElement.textContent = "";
    feedbackElement.classList.add("hidden");
    nextButton.classList.add("hidden");

    // Update progress bar
    progressBar.style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
  };

  const checkAnswer = (selectedOption, button) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      score++;
      feedbackElement.textContent = "✅ Correct! Great Job!";
      feedbackElement.style.color = "green";
      button.classList.add("correct");
    } else {
      feedbackElement.textContent = "❌ Incorrect. Try again!";
      feedbackElement.style.color = "red";
      button.classList.add("wrong");
    }
    feedbackElement.classList.remove("hidden");
    nextButton.classList.remove("hidden");

    // Disable all buttons after selection
    Array.from(optionsElement.children).forEach((btn) => (btn.disabled = true));
  };

  const nextQuestion = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  };

  const showScore = () => {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.classList.add("hidden");
    scoreElement.classList.remove("hidden");
    document.getElementById("score").textContent = `${score} / ${quizQuestions.length}`;
  };

  const restartQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.classList.add("hidden");
    loadQuestion();
  };

  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", restartQuiz);

  loadQuestion();
});


function openSettings() {
  // Add your settings panel code here
  console.log("Settings button clicked!");
}
// Function to get the Islamic date
function getIslamicDate() {
  try {
    const islamicMonths = [
      "Muharram", "Safar", "Rabi' al-awwal", "Rabi' al-thani",
      "Jumada al-awwal", "Jumada al-thani", "Rajab", "Sha'ban",
      "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah"
    ];

    const date = new Date();
    const islamicFormatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
    const formattedDate = islamicFormatter.formatToParts(date);

    // Extract day, month, and year
    let day = parseInt(formattedDate.find(part => part.type === 'day').value, 10);
    const monthIndex = parseInt(formattedDate.find(part => part.type === 'month').value, 10) - 1;
    const year = formattedDate.find(part => part.type === 'year').value;

    // Apply an offset to match local moon sightings
    const offset = -1; // Adjust this value (-1, 0, +1, etc.) based on your location
    day += offset;

    // Handle day overflow/underflow
    if (day < 1) {
      // Go to the previous month
      const prevMonthIndex = (monthIndex === 0) ? 11 : monthIndex - 1;
      const prevMonthDays = (prevMonthIndex === 1) ? 29 : 30; // Safar has 29 days; others typically 30
      day += prevMonthDays;
    } else if (day > 30) {
      // Go to the next month
      day -= 30;
    }

    // Map month index to Islamic month name
    const islamicMonth = islamicMonths[monthIndex];

    return `${day} ${islamicMonth} ${year}`;
  } catch (error) {
    // Fallback to manual calculation if Intl fails
    return calculateHijriFallback();
  }
}

// Function to get the Gregorian date
function getGregorianDate() {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Display the dates on page load
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("gregorian-date").innerText = getGregorianDate();
  document.getElementById("islamic-date").innerText = getIslamicDate();
});

const themeToggle = document.getElementById("theme-toggle");
const dropdownMenu = document.getElementById("dropdown-menu");

themeToggle.addEventListener("click", function() {
  // Toggle visibility of the dropdown menu
  dropdownMenu.classList.toggle("hidden");

  // Change the icon based on dropdown visibility
  const icon = document.getElementById("theme-icon");
  if (dropdownMenu.classList.contains("hidden")) {
    icon.classList.remove("fa-times");  // Close icon (X)
    icon.classList.add("fa-bars");      // Hamburger icon
  } else {
    icon.classList.remove("fa-bars");   // Hamburger icon
    icon.classList.add("fa-times");     // Close icon (X)
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const contentDisplay = document.getElementById("content-display");

  

  // Expose the `showContent` function to the global scope
  window.showContent = showContent;
});
document.addEventListener("DOMContentLoaded", () => {
  const folderList = document.getElementById("folder-list");
  const createFolderBtn = document.getElementById("create-folder-btn");
  const folderNameInput = document.getElementById("folder-name-input");
  const selectedFolder = document.getElementById("selected-folder");
  const selectedFolderName = document.getElementById("selected-folder-name");
  const duaText = document.getElementById("dua-text");
  const exportPdfBtn = document.getElementById("export-pdf-btn");
  const shareFolderBtn = document.getElementById("share-folder-btn");

  let folders = {};

  // Create a new folder
  createFolderBtn.addEventListener("click", () => {
    const folderName = folderNameInput.value.trim();
    if (!folderName) {
      alert("Please enter a folder name.");
      return;
    }
    if (folders[folderName]) {
      alert("Folder with this name already exists.");
      return;
    }

    folders[folderName] = ""; // Initialize folder content
    const folderElement = document.createElement("button");
    folderElement.textContent = folderName;
    folderElement.className = "bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 rounded mt-2 block w-full";
    folderElement.addEventListener("click", () => selectFolder(folderName));
    folderList.appendChild(folderElement);

    folderNameInput.value = ""; // Clear input
    folderList.querySelector("p")?.remove(); // Remove "no folders yet" message
  });

  // Select a folder
  const selectFolder = (folderName) => {
    selectedFolder.classList.remove("hidden");
    selectedFolderName.textContent = folderName;
    duaText.value = folders[folderName];
  };

  // Save folder content
  duaText.addEventListener("input", () => {
    const currentFolder = selectedFolderName.textContent;
    folders[currentFolder] = duaText.value;
  });

  // Export as PDF
  exportPdfBtn.addEventListener("click", () => {
    const currentFolder = selectedFolderName.textContent;
    const content = folders[currentFolder];
    if (!content) {
      alert("The folder is empty. Add some duas first!");
      return;
    }

    const doc = new jsPDF();
    doc.text(`Duas in Folder: ${currentFolder}`, 10, 10);
    doc.text(content, 10, 20);
    doc.save(`${currentFolder}.pdf`);
  });

  // Share folder
  shareFolderBtn.addEventListener("click", () => {
    const currentFolder = selectedFolderName.textContent;
    const content = folders[currentFolder];
    if (!content) {
      alert("The folder is empty. Add some duas first!");
      return;
    }

    const encodedContent = encodeURIComponent(content);
    const shareUrl = `https://wa.me/?text=${encodedContent}`;
    window.open(shareUrl, "_blank");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const folderList = document.getElementById("folder-list");
  const galleryGrid = document.getElementById("gallery-grid");
  const backButton = document.getElementById("back-btn");

  const islamicImages = {
    calligraphy: [
      "https://example.com/calligraphy1.jpg",
      "https://example.com/calligraphy2.jpg",
      "https://example.com/calligraphy3.jpg",
    ],
    mosques: [
      "https://example.com/mosque1.jpg",
      "https://example.com/mosque2.jpg",
      "https://example.com/mosque3.jpg",
    ],
    "quran-verses": [
      "https://example.com/quran1.jpg",
      "https://example.com/quran2.jpg",
      "https://example.com/quran3.jpg",
    ]
  };

  // Function to load images based on the selected folder
  const loadImages = (folderName) => {
    galleryGrid.innerHTML = ""; // Clear previous images
    const images = islamicImages[folderName];

    images.forEach((url) => {
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "relative group overflow-hidden rounded-lg shadow-lg";

      imgWrapper.innerHTML = `
        <img src="${url}" alt="Islamic Image" class="w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-110">
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded">Save</button>
        </div>
      `;

      galleryGrid.appendChild(imgWrapper);
    });

    // Hide folder list and show gallery
    folderList.classList.add("hidden");
    galleryGrid.classList.remove("hidden");
    backButton.classList.remove("hidden");
  };

  // Add click event listeners to each folder
  const folders = document.querySelectorAll(".folder");
  folders.forEach((folder) => {
    folder.addEventListener("click", () => {
      const folderName = folder.dataset.folder;
      loadImages(folderName);
    });
  });

  // Add click event listener for the back button
  backButton.addEventListener("click", () => {
    folderList.classList.remove("hidden");
    galleryGrid.classList.add("hidden");
    backButton.classList.add("hidden");
  });
});


function showContent(contentType) {
  // Get current day of the week (short version)
  const currentDay = new Date().toLocaleString('en-us', { weekday: 'short' });
  console.log("Today is:", currentDay); // Log current day for debugging

  const contentMap = {
    "Sun": {
      "daily-dua": `
        <h3>Sunday Dua</h3>
        <p>اللهم اجعلني من التوابين واجعلني من المتطهرين</p>
        <p>Translation: O Allah, make me among those who constantly repent and purify themselves.</p>
        <audio controls>
          <source src="audios/dua-sunday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-verse": `
        <h3>Sunday Verse</h3>
        <p>"And whoever relies upon Allah – then He is sufficient for him." - Surah At-Talaq (65:3)</p>
        <audio controls>
          <source src="audios/verse-sunday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-hadith": `
        <h3>Sunday Hadith</h3>
        <p>The Prophet (ﷺ) said: "None of you truly believes until he loves for his brother what he loves for himself." - Sahih al-Bukhari</p>
        <audio controls>
          <source src="audios/hadith-sunday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-wisdom": `
        <h3>Sunday Wisdom</h3>
        <p>"Be like a flower that gives its fragrance even to the hand that crushes it."</p>
        <audio controls>
          <source src="audios/wisdom-sunday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`
    },
    "Mon": {
      "daily-dua": `
        <h3>Monday Dua</h3>
        <p>اللهم ارزقني رزقًا حلالًا طيبًا</p>
        <p>Translation: O Allah, grant me sustenance that is halal and pure.</p>
        <audio controls>
          <source src="audios/dua-monday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-verse": `
        <h3>Monday Verse</h3>
        <p>"Indeed, Allah is with those who fear Him and those who are doers of good." - Surah An-Nahl (16:128)</p>
        <audio controls>
          <source src="audios/verse-monday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-hadith": `
        <h3>Monday Hadith</h3>
        <p>The Prophet (ﷺ) said: "The strong one is not the one who overcomes people by his strength, but the one who controls himself when he is angry." - Sahih al-Bukhari</p>
        <audio controls>
          <source src="audios/hadith-monday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-wisdom": `
        <h3>Monday Wisdom</h3>
        <p>"The real victory is when you control yourself in the face of adversity."</p>
        <audio controls>
          <source src="audios/wisdom-monday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`
    },
    "Tue": {
      "daily-dua": `
        <h3>Tuesday Dua</h3>
        <p>اللهم ارزقني رزقًا حلالًا طيبًا</p>
        <p>Translation: O Allah, grant me sustenance that is halal and pure.</p>
        <audio controls>
          <source src="audios/dua-tuesday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-verse": `
        <h3>Tuesday Verse</h3>
        <p>"Indeed, Allah is with those who fear Him and those who are doers of good." - Surah An-Nahl (16:128)</p>
        <audio controls>
          <source src="audios/verse-tuesday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-hadith": `
        <h3>Tuesday Hadith</h3>
        <p>The Prophet (ﷺ) said: "The strong one is not the one who overcomes people by his strength, but the one who controls himself when he is angry." - Sahih al-Bukhari</p>
        <audio controls>
          <source src="audios/hadith-tuesday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`,
      "daily-wisdom": `
        <h3>Tuesday Wisdom</h3>
        <p>"The real victory is when you control yourself in the face of adversity."</p>
        <audio controls>
          <source src="audios/wisdom-tuesday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`
    },
    "Wed": {
      
      "daily-dua": `
        <h3>Wednesday Dua</h3>
        <p>اللهم ارزقني رزقًا حلالًا طيبًا</p>
        <p>Translation: O Allah, grant me sustenance that is halal and pure.</p>
        <audio controls>
          <source src="audios/dua-wednesday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`
        ,
      "daily-verse": `

        <h3>Wednesday Verse</h3>
        <p>"Indeed, Allah is with those who fear Him and those who are doers of good." - Surah An-Nahl (16:128)</p>
        <audio controls>
          <source src="audios/verse-wednesday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>`
        ,
      "daily-hadith": `
        <h3>Wednesday Hadith</h3>
        <p>The Prophet (ﷺ) said: "The strong one is not the one who overcomes people by his strength, but the one who controls himself when he is angry." - Sahih al-Bukhari</p>
        <audio controls>
        <source src="audios/hadith-wednesday.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>`
        ,
      "daily-wisdom": `
      <h3>Wednesday Wisdom</h3>
      <p>"The real victory is when you control yourself in the face of adversity."</p>
      <audio controls>
        <source src="audios/wisdom-wednesday.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
              </audio>`
        
      },
    "Thu": {
      
      "daily-dua": `
        <h3>Thursday Dua</h3>
        <p>اللهم ارزقني رزقًا حلالًا طيبًا</p>
        <p>Translation: O Allah, grant me sustenance that is halal and pure.</p>
        <audio controls>
          <source src="audios/dua-thursday.
          type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`
        ,
      "daily-verse": `
        <h3>Thursday Verse</h3>
        <p>"Indeed, Allah is with those who fear Him and those who are doers of good." - Surah An-Nahl (16:128)</p>
        <audio controls>
          <source src="audios/verse-thursday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`
        ,
      "daily-hadith": `
        <h3>Thursday Hadith</h3>
        <p>The Prophet (ﷺ) said: "The strong one is not the one who overcomes people by his strength, but the one who controls himself when he is angry." - Sahih al-Bukhari</p>
        <audio controls>
          <source src="audios/hadith-thursday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`
        ,
      "daily-wisdom": `
        <h3>Thursday Wisdom</h3>
        <p>"The real victory is when you control yourself in the face of adversity."</p>
        <audio controls>
          <source src="audios/wisdom-thursday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`

    },
    "Fri": {
      
      "daily-dua": `
        <h3>Friday Dua</h3>
        <p>اللهم ارزقني رزقًا حلالًا طيبًا</p>
        <p>Translation: O Allah, grant me sustenance that is halal and pure.</p>
        <audio controls>
          <source src="audios/dua-friday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`
        ,
      "daily-verse": `
        <h3>Friday Verse</h3>
        <p>"Indeed, Allah is with those who fear Him and those who are doers of good." - Surah An-Nahl (16:128)</p>
        <audio controls>
          <source src="audios/verse-friday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`
        ,
      "daily-hadith": `
        <h3>Friday Hadith</h3>
        <p>The Prophet (ﷺ) said: "The strong one is not the one who overcomes people by his strength, but the one who controls himself when he is angry." - Sahih al-Bukhari</p>
        <audio controls>
        <source src="audios/hadith-friday.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>`
        ,
      "daily-wisdom": `
        <h3>Friday Wisdom</h3>
        <p>"The real victory is when you control yourself in the face of adversity."</p>
        <audio controls>
          <source src="audios/wisdom-friday.mp3" type="audio/mpeg">
          Your browser does not support the audio element.
          </audio>`

    },
    "Sat": {

      "daily-dua": `
        <h3>Saturday Dua</h3>
        <p>اللهم ارزقني رزقًا حلالًا طيبًا</p>
        <p>Translation: O Allah, grant me sustenance that is halal and pure.</p>
        <audio controls>
        <source src="audios/dua-saturday.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>`
        ,
      "daily-verse": `
        <h3>Saturday Verse</h3>
        <p>"Indeed, Allah is with those who fear Him and those who are doers of good." - Surah An-Nahl (16:128)</p>
        <audio controls>
        <source src="audios/verse-saturday.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
                </audio>`
              ,
      "daily-hadith": `
        <h3>Saturday Hadith</h3>
        <p>The Prophet (���) said: "The strong one is not the one who overcomes people by his strength, but the one who controls himself when he is angry." - Sahih al-Bukhari</p>
        <audio controls>
        <source src="audios/hadith-saturday.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
                </audio>`
                ,
      "daily-wisdom": `
      <h3>Saturday Wisdom</h3>
      <p>"The real victory is when you control yourself in the face of adversity."</p>
      <audio controls>
        <source src="audios/wisdom-saturday.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
                </audio>`

    }
  };

  console.log("Checking for content for the day:", currentDay); // For debugging

  // Check if content exists for today and the selected content type
  if (contentMap[currentDay] && contentMap[currentDay][contentType]) {
    document.getElementById('content-display').innerHTML = contentMap[currentDay][contentType];
  } else {
    document.getElementById('content-display').innerHTML = "<h3>No content available for today.</h3>";
  }
}

//toogle
function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdownMenu");
  dropdownMenu.classList.toggle("show");
}
