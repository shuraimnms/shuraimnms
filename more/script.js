// scripts/app.js

// Search bar functionality
document.getElementById("search-bar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const feature = card.dataset.feature.toLowerCase();
        if (feature.includes(query)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
// Function to handle the click event on each card
function handleCardClick(cardElement) {
    // Toggle the 'active' class to change color and indicate the card is selected
    cardElement.classList.toggle("active");

    // Optionally, show an alert with the card's title
    alert(`You clicked on ${cardElement.querySelector(".card-title").textContent}`);

    // Redirect to another page (optional)
    // window.location.href = `/some-page.html`; 
}
// Function to open the respective page when a card is clicked
function openPage(url) {
    window.location.href = url; // Redirect to the URL provided
}

// Function for other card clicks (optional, for the rest of the cards)
function handleCardClick(cardElement) {
    // Example of handling a click (you can perform additional actions here)
    cardElement.classList.toggle("active"); // Toggles a class for visual feedback (e.g., color change)
    alert(`You clicked on ${cardElement.querySelector(".card-title").textContent}`);
}
