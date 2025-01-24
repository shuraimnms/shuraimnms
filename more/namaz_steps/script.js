// JavaScript for Folder Click Navigation
document.querySelectorAll('.folder').forEach(folder => {
  folder.addEventListener('click', () => {
      const link = folder.getAttribute('data-link');
      window.location.href = link;
  });
});

// Search Functionality
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  document.querySelectorAll('.folder').forEach(folder => {
      const title = folder.querySelector('h2').textContent.toLowerCase();
      folder.style.display = title.includes(query) ? 'flex' : 'none';
  });
});
