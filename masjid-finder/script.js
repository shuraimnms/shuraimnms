// Toggle Dark/Light Theme
function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Find Masjids Function
function findMasjids() {
  const location = document.getElementById('search-bar').value;

  if (location.trim() === "") {
    alert("Please enter a location.");
    return;
  }

  // Sample Masjid data (replace with API data in a real app)
  const masjids = [
    {
      name: "Al-Masjid al-Haram",
      address: "Mecca, Saudi Arabia",
      distance: "0 km",
      description: "The most sacred mosque in Islam, where millions perform Hajj every year.",
      lat: 21.4225,
      lng: 39.8262
    },
    {
      name: "Al-Masjid an-Nabawi",
      address: "Medina, Saudi Arabia",
      distance: "350 km",
      description: "The mosque built by Prophet Muhammad (PBUH), one of the holiest sites in Islam.",
      lat: 24.4686,
      lng: 39.6142
    },
    {
      name: "Al-Aqsa Mosque",
      address: "Jerusalem, Palestine",
      distance: "1200 km",
      description: "The third holiest mosque in Islam, located in the city of Jerusalem.",
      lat: 31.7767,
      lng: 35.2351
    }
  ];

  // Display Masjid Cards
  const masjidListDiv = document.getElementById('masjid-list');
  masjidListDiv.innerHTML = '';

  masjids.forEach(masjid => {
    const masjidItem = document.createElement('div');
    masjidItem.classList.add('masjid-item');
    masjidItem.onclick = function () {
      showMasjidDetails(masjid);
    };

    masjidItem.innerHTML = `
      <h3>${masjid.name}</h3>
      <p>${masjid.address}</p>
    `;

    masjidListDiv.appendChild(masjidItem);
  });
}

// Show Masjid Details in Modal
function showMasjidDetails(masjid) {
  document.getElementById('masjid-name').textContent = masjid.name;
  document.getElementById('masjid-address').textContent = masjid.address;
  document.getElementById('masjid-distance').textContent = masjid.distance;
  document.getElementById('masjid-description').textContent = masjid.description;

  // Initialize Google Maps (use your own API key)
  const map = new google.maps.Map(document.getElementById('masjid-map'), {
    zoom: 12,
    center: { lat: masjid.lat, lng: masjid.lng }
  });

  new google.maps.Marker({
    position: { lat: masjid.lat, lng: masjid.lng },
    map: map,
    title: masjid.name
  });

  document.getElementById('masjid-modal').style.display = "block";
}

// Close Modal
function closeModal() {
  document.getElementById('masjid-modal').style.display = "none";
}
