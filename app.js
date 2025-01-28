
document.addEventListener("DOMContentLoaded", () => {
  // Daily Questions
  const dailyQuestions = {
      Sunday: [
          {
              question: "What is the first pillar of Islam?",
              options: ["Salah (Prayer)", "Shahadah (Faith)", "Hajj (Pilgrimage)", "Zakat (Charity)"],
              answer: "Shahadah (Faith)",
          },
          {
              question: "How many chapters (Surahs) are in the Quran?",
              options: ["113", "114", "115", "112"],
              answer: "114",
          },
          {
              question: "What is the fourth pillar of Islam?",
              options: ["Salah (Prayer)", "Shahadah (Faith)", "Hajj (Pilgrimage)", "Zakat (Charity)"],
              answer: "Sawm (Fasting)",
          },
          {
              question: "Which prophet built the Kaaba in Mecca?",
              options: ["Prophet Ibrahim (Abraham)", "Prophet Isma'il (Ishmael)", "Prophet Muhammad (PBUH)", "Prophet Musa (Moses)"],
              answer: "Prophet Ibrahim (Abraham)",
          },
          {
              question: "What is the name of the angel who will blow the trumpet on the Day of Judgment?",
              options: ["Israfil", "Jibril", "Mika'il", "Azrael"],
              answer: "Israfil",
          },
          {
              question: "What is the name of the angel who will question the deceased in the grave?",
              options: ["Israfil", "Jibril", "Munkar and Nakir", "Azrael"],
              answer: "Munkar and Nakir",

              },
              {
                  question: "What is the name of the angel who will bring the people to the Kingdom of Heaven?",
                  options: ["Israfil", "Jibril", "Mika'il", "Azrael"],
                  answer: "Israfil",
              },
        
      ],
      Monday: [
          {
              question: "What is the second pillar of Islam?",
              options: ["Salah (Prayer)", "Shahadah (Faith)", "Hajj (Pilgrimage)", "Zakat (Charity)"],
              answer: "Salah (Prayer)",
          },
          {
              question: "Which month is Ramadan in?",
              options: ["Shawwal", "Rajab", "Ramadan", "Dhul-Hijjah"],
              answer: "Ramadan",
          },
          {
              question: "What is the third pillar of Islam?",
              options: ["Salah (Prayer)", "Shahadah (Faith)", "Hajj (Pilgrimage)", "Zakat (Charity)"],
              answer: "Zakat (Charity)",
          },
          {
              question: "What is the name of the Prophet who was born in Mecca?",
              options: ["Prophet Muhammad (PBUH)", "Prophet Ibrahim (Abraham)", "Prophet Isma'il (Ishmael)", "Prophet Musa (Moses)"],
              answer: "Prophet Muhammad (PBUH)",
          },
          {
              question: "What is the name of the Prophet who was born in Medina?",
              options: ["Prophet Muhammad (PBUH)", "Prophet Ibrahim (Abraham)", "Prophet Isma'il (Ishmael)", "Prophet Musa (Moses)"],
              answer: "Prophet Ibrahim (Abraham)",
          }
          ],
            Tuesday: [
              {
                question: "What is the first pillar of Islam?",
                options: ["Salah (Prayer)", "Shahadah (Faith)", "Hajj (Pilgrimage)", "Zakat (Charity)"],
                answer: "Shahadah (Faith)",
              },
              {
                question: "Which angel brought revelation to the Prophet Muhammad (PBUH)?",
                options: ["Jibril (Gabriel)", "Mika'il (Michael)", "Israfil (Raphael)", "Azrael (Angel of Death)"],
                answer: "Jibril (Gabriel)",
              },
              
                {
                  question: "What is the direction Muslims face during prayer?",
                  options: ["Jerusalem", "Kaaba", "Mount Sinai", "Madina"],
                  answer: "Kaaba",
                },
            
              {
                question: "What is the holy book of Islam?",
                options: ["Quran", "Bible", "Torah", "Psalms"],
                answer: "Quran",
              },
              {
                question: "Who was the first Caliph after Prophet Muhammad (PBUH)?",
                options: ["Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan"],
                answer: "Abu Bakr",
              },
            ],
            Wednesday: [
              {
                question: "Which mosque is considered the second holiest in Islam?",
                options: ["Al-Aqsa Mosque", "Al-Masjid al-Haram", "Al-Nabawi Mosque", "Quba Mosque"],
                answer: "Al-Aqsa Mosque",
              },
              {
                question: "What is the meaning of the word 'Islam'?",
                options: ["Submission", "Peace", "Strength", "Justice"],
                answer: "Submission",
              },
              {
                question: "During which month do Muslims fast from dawn to sunset?",
                options: ["Muharram", "Ramadan", "Dhul-Hijjah", "Shawwal"],
                answer: "Ramadan",
              },
              

              {
                question: "What is the name of the pilgrimage to Mecca that Muslims perform?",
                options: ["Hajj", "Umrah", "Zakat", "Salah"],
                answer: "Hajj",
              },
              {
                question: "Which is the longest surah in the Quran?",
                options: ["Al-Fatiha", "Al-Baqarah", "Al-Ikhlas", "An-Nisa"],
                answer: "Al-Baqarah",
              },
            ],
            Thursday: [
              {
                question: "How many rak'ahs are there in a typical obligatory prayer (Salah)?",
                options: ["3", "5", "4", "2"],
                answer: "4",
              },
              {
                question: "Which prophet was swallowed by a whale?",
                options: ["Prophet Yunus (Jonah)", "Prophet Musa (Moses)", "Prophet Ibrahim (Abraham)", "Prophet Muhammad (PBUH)"],
                answer: "Prophet Yunus (Jonah)",
              },
              {
                question: "What is the name of the night when the Quran was first revealed?",
                options: ["Lailat al-Miraj", "Lailat al-Qadr", "Lailat al-Badr", "Lailat al-Isra"],
                answer: "Lailat al-Qadr",
              },
              {
                question: "What is the name of the prayer performed before dawn?",
                options: ["Isha", "Maghrib", "Fajr", "Dhuhr"],
                answer: "Fajr",
              },
              {
                question: "What is the name of the month in which fasting (Sawm) occurs?",
                options: ["Shawwal", "Dhul-Hijjah", "Ramadan", "Rajab"],
                answer: "Ramadan",
              },
            ],
            Friday: [
              {
                question: "Which surah of the Quran is called the heart of the Quran?",
                options: ["Al-Fatiha", "Al-Baqarah", "Ya-Sin", "Al-Ikhlas"],
                answer: "Ya-Sin",
              },
              {
                question: "How many times is the name of Prophet Muhammad (PBUH) mentioned in the Quran?",
                options: ["4", "2", "7", "1"],
                answer: "4",
              },
              {
                question: "What is the name of the prayer performed on Friday afternoons?",
                options: ["Dhuhr", "Asr", "Maghrib", "Jumu'ah"],
                answer: "Jumu'ah",
              },
              {
                question: "Which is the first month of the Islamic calendar?",
                options: ["Ramadan", "Dhul-Hijjah", "Rajab", "Muharram"],
                answer: "Muharram",
              },
              {
                question: "Which companion of the Prophet Muhammad (PBUH) is known as the Sword of Allah?",
                options: ["Abu Bakr", "Ali ibn Abi Talib", "Khalid ibn al-Walid", "Umar ibn al-Khattab"],
                answer: "Khalid ibn al-Walid",
              },
            ],
            Saturday: [
              {
                question: "What is the name of the river in Paradise mentioned in the Quran?",
                options: ["River of Milk", "River of Honey", "River of Water", "River of Wine"],
                answer: "River of Water",
              },
              {
                question: "What is the word for charity in Islam?",
                options: ["Zakat", "Sadaqah", "Hajj", "Sawm"],
                answer: "Zakat",
              },
              {
                question: "Which angel is responsible for blowing the trumpet on the Day of Judgment?",
                options: ["Israfil", "Jibril", "Mika'il", "Azrael"],
                answer: "Israfil",
              },
              {
                question: "Which city is considered the birthplace of Prophet Muhammad (PBUH)?",
                options: ["Medina", "Mecca", "Jerusalem", "Kufa"],
                answer: "Mecca",
              },
              {
                question: "Which is the smallest surah of the Quran?",
                options: ["Al-Fatiha", "Al-Ikhlas", "Al-Nas", "Al-Asr"],
                answer: "Al-Ikhlas",
              },
            ],
          };
          
          
    
      // Add questions for other days...
  
  // Determine the current day
  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const questions = dailyQuestions[today] || [];

  // Get HTML elements
  const questionContainer = document.getElementById("quiz-container");
  const questionElement = document.getElementById("quiz-question");
  const optionsElement = document.getElementById("quiz-options");
  const feedbackElement = document.getElementById("quiz-feedback");
  const nextButton = document.getElementById("next-question");
  const restartButton = document.getElementById("restart-quiz");

  let currentQuestionIndex = 0;
  let score = 0;

  // Load a question
  function loadQuestion() {
      if (currentQuestionIndex < questions.length) {
          const currentQuestion = questions[currentQuestionIndex];
          questionElement.textContent = currentQuestion.question;
          optionsElement.innerHTML = "";
          feedbackElement.style.display = "none"; // Hide feedback initially

          // Display options
          currentQuestion.options.forEach((option) => {
              const button = document.createElement("button");
              button.textContent = option;
              button.classList.add("quiz-option");
              button.addEventListener("click", () => checkAnswer(option, currentQuestion.answer));
              optionsElement.appendChild(button);
          });

          // Show Next Question button
          nextButton.style.display = "none"; // Hide Next Question button initially
      } else {
          showResults();
      }
  }

  // Check the selected answer
  function checkAnswer(selectedOption, correctAnswer) {
      const buttons = document.querySelectorAll(".quiz-option");

      buttons.forEach(button => {
          button.disabled = true; // Disable all options after one is selected
          if (button.textContent === correctAnswer) {
              button.classList.add("correct");
          }
          if (button.textContent === selectedOption && selectedOption !== correctAnswer) {
              button.classList.add("incorrect");
          }
      });

      if (selectedOption === correctAnswer) {
          feedbackElement.textContent = "Correct!";
          feedbackElement.classList.remove("incorrect");
          feedbackElement.classList.add("correct");
          score++;
      } else {
          feedbackElement.textContent = `Wrong! The correct answer is: ${correctAnswer}`;
          feedbackElement.classList.remove("correct");
          feedbackElement.classList.add("incorrect");
      }

      feedbackElement.style.display = "block";
      nextButton.style.display = "inline-block"; // Show Next Question button
  }

  // Handle Next Question click
  nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      loadQuestion(); // Load the next question
  });

  // Show the final results
  function showResults() {
      questionElement.textContent = "Quiz Completed!";
      optionsElement.innerHTML = "";
      feedbackElement.textContent = `Your final score: ${score}/${questions.length}`;
      nextButton.style.display = "none"; // Don't show Next Question button on final results
      restartButton.style.display = "block";
  }

  // Restart the quiz
  restartButton.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      restartButton.style.display = "none";
      loadQuestion();
  });

  // Initialize the quiz
  if (questions.length > 0) {
      loadQuestion();
  } else {
      questionContainer.innerHTML = "<p>No quiz available for today. Please come back tomorrow!</p>";
  }
});



// Function to open the settings panel

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

// load data 
// Save a bookmark to local storage
document.getElementById("saveBookmark").addEventListener("click", () => {
  const bookmark = "Morning Duas";
  localStorage.setItem("bookmark", bookmark);
  alert("Bookmark Saved!");
});

// Load the bookmark from local storage
document.getElementById("loadBookmark").addEventListener("click", () => {
  const savedBookmark = localStorage.getItem("bookmark");
  if (savedBookmark) {
      alert(`Your Bookmark: ${savedBookmark}`);
  } else {
      alert("No Bookmark Found!");
  }
});
