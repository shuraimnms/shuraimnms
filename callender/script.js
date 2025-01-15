// Initialize calendar
const calendarTitle = document.getElementById("calendar-title");
const calendarGrid = document.querySelector(".calendar-grid");
const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar(date) {
  const month = date.getMonth();
  const year = date.getFullYear();

  // Update calendar title
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];
  calendarTitle.textContent = `${monthNames[month]} ${year}`;

  // Clear previous calendar days
  const oldDays = document.querySelectorAll(".calendar-day");
  oldDays.forEach((day) => day.remove());

  // Get the first day of the month and total days in the month
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add blank days for previous month's days
  for (let i = 0; i < firstDay; i++) {
    const blankDay = document.createElement("div");
    blankDay.classList.add("calendar-day");
    calendarGrid.appendChild(blankDay);
  }

  // Add days of the current month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day");
    dayElement.textContent = day;

    // Add tooltips for special events (e.g., Islamic holidays)
    if (day === 25 && month === 0) {
      dayElement.classList.add("tooltip");
      dayElement.setAttribute("data-tooltip", "Islamic New Year");
    }

    // Highlight today's date
    const today = new Date();
    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayElement.classList.add("today");
    }

    calendarGrid.appendChild(dayElement);
  }
}

// Add event listeners for navigation buttons
prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
