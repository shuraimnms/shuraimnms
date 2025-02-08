// Function to find nearby masjids using Google Search
function findNearbyMasjid() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          window.open(`https://www.google.com/maps/search/masjid/@${lat},${lon},15z`, "_blank");
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}

// Function to find Islamic events near the user
function findIslamicEvents() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          window.open(`https://www.google.com/search?q=Islamic+events+near+me`, "_blank");
      });
  } else {
      alert("Geolocation is not supported by this browser.");
  }
}

// Function to find Qibla direction
function findQibla() {
  window.open(`https://qiblafinder.withgoogle.com/intl/en/`, "_blank");
}

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
      themeToggle.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
      themeToggle.innerHTML = `<i class="fas fa-moon"></i>`;
  }
});
