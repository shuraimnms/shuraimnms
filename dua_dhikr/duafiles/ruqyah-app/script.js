document.getElementById("playButton").addEventListener("click", function () {
    let audioPlayer = document.getElementById("audioPlayer");

    // ✅ Use your correct Cloudinary URL
    let ruqyahUrl = "https://res.cloudinary.com/djpuishc9/video/upload/audio/ruqya/gb8mjihmgtipirqgar2s.mp3";

    audioPlayer.src = ruqyahUrl;
    audioPlayer.play().catch(error => console.error("Playback failed:", error));
});
