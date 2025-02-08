document.addEventListener("DOMContentLoaded", function() {
  let count = 0;
  let target = 33;

  const counterDisplay = document.getElementById("counter");
  const increaseBtn = document.getElementById("increase-btn");
  const resetBtn = document.getElementById("reset-btn");
  const targetRange = document.getElementById("targetRange");
  const targetText = document.getElementById("target");
  const dhikrDisplay = document.getElementById("dhikr-display");

  // List of Dhikrs
  const dhikrList = [
      "سُبْحَانَ اللّهِ", // SubhanAllah
      "اَلْحَمْدُ لِلّهِ", // Alhamdulillah
      "اللّهُ أَكْبَرُ", // Allahu Akbar
      "لَا إِلٰهَ إِلَّا اللّهُ", // La ilaha illaAllah
      "اَسْتَغْفِرُ اللّهَ", // Astaghfirullah
  ];

  // Function to update counter & change Dhikr
  function increaseCount() {
      count++;
      counterDisplay.innerText = count;
      dhikrDisplay.innerText = dhikrList[count % dhikrList.length];

      // Add Heartbeat Effect
      counterDisplay.classList.add("heartbeat");
      setTimeout(() => counterDisplay.classList.remove("heartbeat"), 500);

      // Vibrate on target completion
      if (count % target === 0) {
          navigator.vibrate(100);
      }
  }

  // Reset Function
  function resetCount() {
      count = 0;
      counterDisplay.innerText = count;
      dhikrDisplay.innerText = dhikrList[0];
  }

  // Update Target
  function updateTarget() {
      target = targetRange.value;
      targetText.innerText = target;
  }

  // Event Listeners
  increaseBtn.addEventListener("click", increaseCount);
  resetBtn.addEventListener("click", resetCount);
  targetRange.addEventListener("input", updateTarget);
});
