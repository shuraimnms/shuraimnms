
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
              options: ["Salah (Prayer)", "Sawm (Fasting)", "Hajj (Pilgrimage)", "Zakat (Charity)"],
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
                question: "What is the word for charity in Islam?",
                options: ["Zakat", "Sadaqah", "Hajj", "Sawm"],
                answer: "Zakat",
              },
            
              
              {
                "question": "Which angel is responsible for blowing the trumpet on the Day of Judgment? (قیامت کے دن صور پھونکنے کی ذمہ داری کس فرشتے کی ہے؟)",
                "options": ["Israfil (اسرافیل)", "Jibril (جبریل)", "Mika'il (میکائیل)", "Azrael (عزرائیل)"],
                "answer": "Israfil (اسرافیل)"
              },              
              {
                question: "Which city is considered the birthplace of Prophet Muhammad (PBUH)?",
                options: ["Medina", "Mecca", "Jerusalem", "Kufa"],
                answer: "Mecca",
              },
              {
                question: "Which is the smallest surah of the Quran?",
                options: ["Al-Fatiha", "Al-Ikhlas", "Al-Nas", "Al-Asr"],
                answer: "Al-Fatiha",
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
    <h3>اتوار کی دعا</h3>
    <p>اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ المُتَطَهِّرِينَ</p>
    <p>اے اللہ! مجھے توبہ کرنے والوں میں شامل کر دے اور مجھے پاکیزہ بننے والوں میں شامل کر دے۔</p>
    <p>O Allah, make me among those who repent and those who purify themselves.</p>`,

  "daily-verse": `
    <h3>اتوار کی آیت</h3>
    <p>إِنَّ اللَّهَ مَعَ الصَّابِرِينَ</p>
    <p>بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔</p>
    <p>Indeed, Allah is with those who are patient. (Surah Al-Baqarah 2:153)</p>`,

  "daily-hadith": `
    <h3>اتوار کی حدیث</h3>
    <p>قال رسول الله ﷺ: "مَنْ لَا يَرْحَمُ النَّاسَ لَا يَرْحَمُهُ اللَّهُ"</p>
    <p>رسول اللہ ﷺ نے فرمایا: "جو لوگوں پر رحم نہیں کرتا، اللہ اس پر رحم نہیں کرتا۔"</p>
    <p>The Prophet ﷺ said: "Whoever does not show mercy to people, Allah will not show mercy to him." (Sahih al-Bukhari)</p>`,

  "daily-wisdom": `
    <h3>اتوار کا حکمت کا قول</h3>
    <p>الرِّضَا بِالقَدَرِ يُحَقِّقُ السَّعَادَةَ</p>
    <p>تقدیر پر راضی رہنا حقیقی خوشی کی بنیاد ہے۔</p>
    <p>Contentment with destiny leads to true happiness.</p>`
},
    "Mon": {
  "daily-dua": `
    <h3>پیر کی دعا</h3>
    <p>اللَّهُمَّ بَدِّلْ سَيِّئَاتِي حَسَنَاتٍ وَاغْفِرْ لِي ذُنُوبِي</p>
    <p>اے اللہ! میری برائیوں کو نیکیوں میں بدل دے اور میرے گناہوں کو معاف فرما۔</p>
    <p>O Allah, replace my sins with good deeds and forgive my shortcomings.</p>`,

  "daily-verse": `
    <h3>پیر کی آیت</h3>
    <p>إِنَّ اللّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ</p>
    <p>بے شک اللہ توبہ کرنے والوں اور پاک صاف رہنے والوں کو پسند کرتا ہے۔</p>
    <p>Indeed, Allah loves those who repent and those who purify themselves. (Surah Al-Baqarah 2:222)</p>`,

  "daily-hadith": `
    <h3>پیر کی حدیث</h3>
    <p>قال رسول الله ﷺ: "مَن كانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ"</p>
    <p>رسول اللہ ﷺ نے فرمایا: "جو شخص اللہ اور آخرت کے دن پر ایمان رکھتا ہو، وہ بھلائی کی بات کرے یا خاموش رہے۔"</p>
    <p>The Prophet ﷺ said: "Whoever believes in Allah and the Last Day should speak good or remain silent." (Sahih al-Bukhari)</p>`,

  "daily-wisdom": `
    <h3>پیر کا حکمت کا قول</h3>
    <p>الصبرُ مفتاحُ الفرجِ</p>
    <p>صبر راحت کی چابی ہے۔</p>
    <p>Patience is the key to relief.</p>`
},
    "Tue": {
  "daily-dua": `
    <h3>منگل کی دعا</h3>
    <p>اللَّهُمَّ اجْعَلْنِي مِنَ الصَّابِرِينَ وَثَبِّتْ قَلْبِي عَلَى دِينِكَ</p>
    <p>اے اللہ! مجھے صبر کرنے والوں میں شامل فرما اور میرے دل کو اپنے دین پر ثابت قدم رکھ۔</p>
    <p>O Allah, make me among the patient and keep my heart firm upon Your religion.</p>`,

  "daily-verse": `
    <h3>منگل کی آیت</h3>
    <p>وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا</p>
    <p>جو اللہ سے ڈرتا ہے، اللہ اس کے لیے نکلنے کا راستہ بنا دیتا ہے۔</p>
    <p>And whoever fears Allah – He will make for him a way out. (Surah At-Talaq 65:2)</p>`,

  "daily-hadith": `
    <h3>منگل کی حدیث</h3>
    <p>قال رسول الله ﷺ: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ"</p>
    <p>رسول اللہ ﷺ نے فرمایا: "دنیا مومن کے لیے قید خانہ اور کافر کے لیے جنت ہے۔"</p>
    <p>The Prophet ﷺ said: "The world is a prison for the believer and a paradise for the disbeliever." (Sahih Muslim)</p>`,

  "daily-wisdom": `
    <h3>منگل کا حکمت کا قول</h3>
    <p>التوكلُ على اللهِ يُريحُ القلبَ</p>
    <p>اللہ پر بھروسہ دل کو سکون دیتا ہے۔</p>
    <p>Trust in Allah brings peace to the heart.</p>`
},
    "Wed": {
  "daily-dua": `
    <h3>بدھ کی دعا</h3>
    <p>اللهم اجعلني من عبادك الصالحين ووفقني لما تحب وترضى</p>
    <p>اے اللہ! مجھے اپنے نیک بندوں میں شامل فرما اور مجھے ان کاموں کی توفیق دے جو تجھے پسند ہوں۔</p>
    <p>O Allah, make me among Your righteous servants and grant me the ability to do what pleases You.</p>`,

  "daily-verse": `
    <h3>بدھ کی آیت</h3>
    <p>وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا</p>
    <p>جو اللہ سے ڈرتا ہے اللہ اس کے لیے راستہ بنا دیتا ہے۔</p>
    <p>And whoever fears Allah – He will make for him a way out. (Surah At-Talaq 65:2)</p>`,

  "daily-hadith": `
    <h3>بدھ کی حدیث</h3>
    <p>قال رسول الله ﷺ: "أفضلُ الأعمالِ: إيمانٌ باللهِ، وجهادٌ في سبيلِهِ، وحجٌّ مبرورٌ"</p>
    <p>رسول اللہ ﷺ نے فرمایا: "سب سے بہترین عمل اللہ پر ایمان، اللہ کی راہ میں جہاد اور حج مبرور ہے۔"</p>
    <p>The Prophet ﷺ said: "The best deeds are: faith in Allah, striving in His cause, and an accepted Hajj." (Sahih al-Bukhari)</p>`,

  "daily-wisdom": `
    <h3>بدھ کا حکمت کا قول</h3>
    <p>الصبرُ عندَ المصيبةِ نصفُ الإيمانِ</p>
    <p>مصیبت پر صبر کرنا آدھا ایمان ہے۔</p>
    <p>Patience in times of hardship is half of faith.</p>`
},
    "Thu": {
  "daily-dua": `
    <h3>جمعرات کی دعا</h3>
    <p>اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُسْلِمِينَ جَمِيعًا</p>
    <p>اے اللہ! مجھے، میرے والدین کو اور تمام مسلمانوں کو بخش دے۔</p>
    <p>O Allah, forgive me, my parents, and all the Muslims.</p>`,

  "daily-verse": `
    <h3>جمعرات کی آیت</h3>
    <p>إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ</p>
    <p>بے شک، تمام مومن بھائی بھائی ہیں، پس اپنے بھائیوں کے درمیان صلح کروا دو۔</p>
    <p>Indeed, the believers are but brothers, so make settlement between your brothers. (Surah Al-Hujurat 49:10)</p>`,

  "daily-hadith": `
    <h3>جمعرات کی حدیث</h3>
    <p>قال رسول الله ﷺ: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ"</p>
    <p>رسول اللہ ﷺ نے فرمایا: "اعمال کا دار و مدار نیتوں پر ہے۔"</p>
    <p>The Prophet ﷺ said: "Actions are judged by intentions." (Sahih al-Bukhari)</p>`,

  "daily-wisdom": `
    <h3>جمعرات کا حکمت کا قول</h3>
    <p>من تواضع لله رفعه</p>
    <p>جو اللہ کے لیے عاجزی اختیار کرتا ہے، اللہ اسے بلند کر دیتا ہے۔</p>
    <p>Whoever humbles himself for Allah, He elevates him.</p>`
},
    "Fri": {
  "daily-dua": `
    <h3>جمعہ کی دعا</h3>
    <p>اللَّهُمَّ اجْعَلْنِي مِنَ الَّذِينَ يَسْتَمِعُونَ الْقَوْلَ فَيَتَّبِعُونَ أَحْسَنَهُ</p>
    <p>اے اللہ! مجھے ان لوگوں میں شامل کر جو اچھی بات سنتے ہیں اور اس پر عمل کرتے ہیں۔</p>
    <p>O Allah, make me among those who listen to good advice and follow the best of it.</p>`,

  "daily-verse": `
    <h3>جمعہ کی آیت</h3>
    <p>يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِنْ يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَى ذِكْرِ اللَّهِ</p>
    <p>اے ایمان والو! جب جمعہ کے دن نماز کے لئے اذان دی جائے تو اللہ کے ذکر کی طرف جلدی کرو۔</p>
    <p>O you who have believed, when the call to prayer is made on the day of Jumu'ah, then proceed to the remembrance of Allah. (Surah Al-Jumu'ah 62:9)</p>`,

  "daily-hadith": `
    <h3>جمعہ کی حدیث</h3>
    <p>قال رسول الله ﷺ: "خَيْرُ يَوْمٍ طَلَعَتْ فِيهِ الشَّمْسُ يَوْمُ الجُمُعَةِ"</p>
    <p>رسول اللہ ﷺ نے فرمایا: "سب سے بہترین دن جس میں سورج طلوع ہوتا ہے، جمعہ کا دن ہے۔"</p>
    <p>The Prophet ﷺ said: "The best day on which the sun rises is Friday." (Sahih Muslim)</p>`,

  "daily-wisdom": `
    <h3>جمعہ کا حکمت کا قول</h3>
    <p>من أكثر من الصلاة على النبي ﷺ يوم الجمعة، نال شفاعته</p>
    <p>جو جمعہ کے دن نبی ﷺ پر زیادہ درود بھیجتا ہے، وہ ان کی شفاعت کا حق دار بن جاتا ہے۔</p>
    <p>Whoever sends abundant blessings upon the Prophet ﷺ on Friday will be entitled to his intercession.</p>`
},
    "Sat": {
  "daily-dua": `
    <h3>ہفتہ کی دعا</h3>
    <p>اللَّهُمَّ إِنِّي أَسْأَلُكَ العَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ</p>
    <p>اے اللہ! میں تجھ سے دنیا اور آخرت میں عافیت کا سوال کرتا ہوں۔</p>
    <p>O Allah, I ask You for well-being in this world and the Hereafter.</p>`,

  "daily-verse": `
    <h3>ہفتہ کی آیت</h3>
    <p>وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا</p>
    <p>اور جو ہمارے راستے میں جدوجہد کرتے ہیں، ہم ضرور انہیں اپنے راستے دکھائیں گے۔</p>
    <p>And those who strive in Our cause – We will surely guide them to Our ways. (Surah Al-Ankabut 29:69)</p>`,

  "daily-hadith": `
    <h3>ہفتہ کی حدیث</h3>
    <p>قال رسول الله ﷺ: "المُؤْمِنُ القَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللَّهِ مِنَ المُؤْمِنِ الضَّعِيفِ"</p>
    <p>رسول اللہ ﷺ نے فرمایا: "طاقتور مؤمن کمزور مؤمن سے بہتر اور اللہ کو زیادہ محبوب ہے۔"</p>
    <p>The Prophet ﷺ said: "A strong believer is better and more beloved to Allah than a weak believer." (Sahih Muslim)</p>`,

  "daily-wisdom": `
    <h3>ہفتہ کا حکمت کا قول</h3>
    <p>الصَّبْرُ عِنْدَ الصَّدْمَةِ الْأُولَى</p>
    <p>حقیقی صبر وہ ہے جو پہلی آزمائش کے وقت کیا جائے۔</p>
    <p>True patience is at the first blow of calamity.</p>`
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
