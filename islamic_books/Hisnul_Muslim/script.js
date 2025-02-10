document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("dua-container");

    if (!container) {
        console.error("Error: 'dua-container' not found in HTML.");
        return;
    }

    if (!Array.isArray(hisnulMuslimDuas)) {
        console.error("Error: 'hisnulMuslimDuas' is not an array.");
        return;
    }

    // Access the nested English array
    const duas = hisnulMuslimDuas[0].English[0].TEXT;

    if (!Array.isArray(duas) || duas.length === 0) {
        console.error("Error: No duas found in 'hisnulMuslimDuas'.");
        return;
    }

    // Loop through the duas and create cards
    duas.forEach(dua => {
        const duaCard = document.createElement("div");
        duaCard.classList.add("dua-card");

        duaCard.innerHTML = `
            <h3>Dua ID: ${dua.ID}</h3>
            <p class="arabic">${dua.ARABIC_TEXT}</p>
            <p class="english">${dua.TRANSLATED_TEXT}</p>
            <p class="repeat">Repeat: ${dua.REPEAT} times</p>
        `;

        // Create an audio element
        const audioElement = document.createElement("audio");
        audioElement.setAttribute("controls", ""); // Show play controls
        audioElement.setAttribute("preload", "none"); // Avoid autoplay issues

        // Ensure correct audio source
        let audioURL = dua.AUDIO;
        if (!audioURL.startsWith("http")) {
            audioURL = window.location.origin + "/" + audioURL; // Convert to absolute path
        }

        console.log("Loading Audio:", audioURL); // Debugging

        const sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", audioURL);
        sourceElement.setAttribute("type", "audio/mpeg");

        // Handle errors
        audioElement.onerror = function () {
            console.error("Audio failed to load:", audioURL);
            alert("Audio file could not be loaded.");
        };

        audioElement.appendChild(sourceElement);
        duaCard.appendChild(audioElement);
        container.appendChild(duaCard);
    });

    console.log("Duas loaded successfully!");
});

// 🔎 SEARCH FUNCTION
function searchDuas() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let duaCards = document.querySelectorAll(".dua-card");

    duaCards.forEach(card => {
        let arabicText = card.querySelector(".arabic").innerText.toLowerCase();
        let englishText = card.querySelector(".english").innerText.toLowerCase();

        if (arabicText.includes(input) || englishText.includes(input)) {
            card.style.display = "block"; // Show matching results
        } else {
            card.style.display = "none"; // Hide non-matching results
        }
    });
}
