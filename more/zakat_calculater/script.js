const zakatForm = document.getElementById("zakat-form");
const zakatAmount = document.getElementById("zakat-amount");
const nisabStatus = document.getElementById("nisab-status");
const whyZakat = document.getElementById("why-zakat");
const resultSection = document.getElementById("zakat-result");
const toggleHadithButton = document.querySelector(".toggle-hadith");
const hadithContent = document.querySelector(".hadith-content");

// Gold and Silver Prices in INR
const goldPrice = 5500; // Example price per gram (INR)
const silverPrice = 75; // Example price per gram (INR)
const nisabValue = goldPrice * 87.48; // Nisab in grams of gold (87.48 grams)

zakatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const cash = parseFloat(document.getElementById("cash").value) || 0;
  const gold = parseFloat(document.getElementById("gold").value) || 0;
  const silver = parseFloat(document.getElementById("silver").value) || 0;
  const business = parseFloat(document.getElementById("business").value) || 0;

  const goldValue = gold * goldPrice;
  const silverValue = silver * silverPrice;
  const totalAssets = cash + goldValue + silverValue + business;

  if (totalAssets >= nisabValue) {
    const zakat = (totalAssets * 0.025).toFixed(2);
    zakatAmount.textContent = `₹${zakat}`;
    nisabStatus.textContent = "آپ زکوٰۃ ادا کرنے کے اہل ہیں۔";
    whyZakat.textContent = `You are eligible because your total assets (₹${totalAssets}) exceed the Nisab threshold (₹${nisabValue.toFixed(2)}).`;
  } else {
    zakatAmount.textContent = "₹0.00";
    nisabStatus.textContent = "آپ زکوٰۃ ادا کرنے کے اہل نہیں ہیں۔";
    whyZakat.textContent = `You are not eligible because your total assets (₹${totalAssets}) are below the Nisab threshold (₹${nisabValue.toFixed(2)}).`;
  }

  resultSection.style.display = "block";
});

toggleHadithButton.addEventListener("click", () => {
  hadithContent.style.display =
    hadithContent.style.display === "none" || hadithContent.style.display === ""
      ? "block"
      : "none";
});
