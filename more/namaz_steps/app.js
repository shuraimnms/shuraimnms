// Toggle visibility of details when the card is clicked
document.querySelectorAll('.folder').forEach(card => {
  card.addEventListener('click', () => {
    const targetId = card.getAttribute('data-target');
    const targetElement = document.getElementById(targetId);
    const isVisible = targetElement.style.display === 'block';
    targetElement.style.display = isVisible ? 'none' : 'block';
  });
});

// Search functionality
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  document.querySelectorAll(".folder").forEach((folder) => {
    const text = folder.textContent.toLowerCase();
    folder.style.display = text.includes(query) ? "block" : "none";
  });
});
