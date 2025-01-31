let currentQuestionIndex = 0;
let score = 0;

const questions = [
  {
    question: "What is the first pillar of Islam?",
    options: ["Shahada", "Salah", "Zakat", "Sawm"],
    answer: "Shahada"
  },
  {
    question: "Which month is the month of fasting in Islam?",
    options: ["Shawwal", "Muharram", "Ramadan", "Dhul-Hijjah"],
    answer: "Ramadan"
  },
  {
    question: "Who was the last Prophet in Islam?",
    options: ["Musa (Moses)", "Isa (Jesus)", "Muhammad (PBUH)", "Ibrahim (Abraham)"],
    answer: "Muhammad (PBUH)"
  },
  {
    question: "What is the holy book of Islam?",
    options: ["Bible", "Vedas", "Quran", "Torah"],
    answer: "Quran"
  },
  {
    question: "How many pillars of Islam are there?",
    options: ["4", "5", "6", "7"],
    answer: "5"
  }
];

// Start the game
function startGame() {
  score = 0;
  currentQuestionIndex = 0;
  document.getElementById("score").textContent = score;
  document.getElementById("result-container").style.display = "none";
  document.querySelector(".quiz-body").style.display = "block";
  showQuestion();
}

// Display the current question and options
function showQuestion() {
  if (currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    document.querySelector(".question").textContent = currentQuestion.question;
    const options = document.querySelectorAll(".option");

    // Display the options for the current question
    currentQuestion.options.forEach((option, index) => {
      options[index].textContent = option;
    });
  } else {
    showResult();
  }
}

// Check answer and move to the next question
function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = document.querySelector(`#${selectedOption}`).textContent;

  if (selectedAnswer === currentQuestion.answer) {
    score++;
    document.getElementById("score").textContent = score;
  }

  // Increment the question index to move to the next question
  currentQuestionIndex++;

  // Show next question after a brief delay
  setTimeout(() => {
    showQuestion();
  }, 500); // Delay of 0.5 seconds before showing the next question
}

// Show the result when all questions are answered
function showResult() {
  document.querySelector(".quiz-body").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("final-score").textContent = `Your Score: ${score} out of ${questions.length}`;
}

// Start the game when the page loads
startGame();
