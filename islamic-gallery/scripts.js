// Toggle Favorite functionality
function toggleFavorite(button) {
  button.classList.toggle('text-red-500'); // Changes color when toggled
  if (button.classList.contains('text-red-500')) {
    button.innerHTML = '<i class="fas fa-heart"></i> Added to Favorites';
  } else {
    button.innerHTML = '<i class="fas fa-heart"></i> Favorite';
  }
}

// Share functionality
function shareContent(image) {
  const url = window.location.href + image;  // Get the URL of the image to share

  // Using a simple share link for WhatsApp and email
  const whatsappLink = `https://wa.me/?text=Check%20out%20this%20image:%20${url}`;
  const emailLink = `mailto:?subject=Islamic%20Gallery%20Image&body=Check%20out%20this%20image:%20${url}`;

  if (navigator.share) {
    // Modern mobile devices with Web Share API
    navigator.share({
      title: 'Islamic Gallery',
      url: url,
    }).catch(error => console.log('Error sharing:', error));
  } else {
    // Fallback for older browsers (WhatsApp and Email)
    window.open(whatsappLink, '_blank');  // Open WhatsApp share link
    window.open(emailLink, '_blank');     // Open Email share link
  }
}
// Function to handle image download
function downloadImage(imageSrc) {
  const link = document.createElement('a');
  link.href = imageSrc; // The image source (URL)
  link.download = imageSrc.split('/').pop(); // Extracts the filename from the URL and sets it as the download name
  link.click(); // Simulate a click to start the download
}

// Function to toggle Favorite (optional functionality)
function toggleFavorite(button) {
  button.classList.toggle("text-red-500"); // Toggle the heart color when clicked
  button.classList.toggle("text-yellow-500"); // Toggle to yellow on un-favorite
}
