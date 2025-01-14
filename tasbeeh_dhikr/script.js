let count = 0;

function incrementCount(bead) {
  count++;
  document.getElementById("counter").textContent = count;

  // Create new bead and append to the container
  const newBead = document.createElement("div");
  newBead.classList.add("bead");
  newBead.setAttribute("onclick", "incrementCount(this)");

  const beadInner = document.createElement("div");
  beadInner.classList.add("bead-inner");

  const beadIcon = document.createElement("span");
  beadIcon.classList.add("bead-icon");
  beadIcon.textContent = "🪙";  // You can change this to any symbol

  beadInner.appendChild(beadIcon);
  newBead.appendChild(beadInner);

  // Append the new bead to the container
  document.getElementById("beads-container").appendChild(newBead);

  // Remove the clicked bead
  bead.remove();

  // Scroll the beads container horizontally (side-scrolling effect)
  document.getElementById("beads-container").scrollBy(100, 0); // Scroll by 100px horizontally
}

function resetCount() {
  count = 0;
  document.getElementById("counter").textContent = count;

  // Reset beads to the initial state
  const beadsContainer = document.getElementById("beads-container");
  beadsContainer.innerHTML = `
    <div class="bead" onclick="incrementCount(this)">
      <div class="bead-inner">
        <span class="bead-icon">🪙</span>
      </div>
    </div>
    <div class="bead" onclick="incrementCount(this)">
      <div class="bead-inner">
        <span class="bead-icon">🪙</span>
      </div>
    </div>
    <div class="bead" onclick="incrementCount(this)">
      <div class="bead-inner">
        <span class="bead-icon">🪙</span>
      </div>
    </div>
    <div class="bead" onclick="incrementCount(this)">
      <div class="bead-inner">
        <span class="bead-icon">🪙</span>
      </div>
    </div>
    <div class="bead" onclick="incrementCount(this)">
      <div class="bead-inner">
        <span class="bead-icon">🪙</span>
      </div>
    </div>
  `;
}
