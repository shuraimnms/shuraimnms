// Bookmark data
const bookmarks = [
    {
        title: 'Morning Dua',
        description: 'Start your day with the morning duas for protection and blessings.',
        link: 'duas.html#morning-dua',
        image: 'https://via.placeholder.com/350x200?text=Morning+Dua',
        icon: 'fa-sun'
    },
    {
        title: 'Evening Dua',
        description: 'End your day with the evening duas for peace and safety.',
        link: 'duas.html#evening-dua',
        image: 'https://via.placeholder.com/350x200?text=Evening+Dua',
        icon: 'fa-moon'
    },
    {
        title: 'Travelling Dua',
        description: 'Recite this dua before embarking on any journey for safety and blessings.',
        link: 'duas.html#travelling-dua',
        image: 'https://via.placeholder.com/350x200?text=Travelling+Dua',
        icon: 'fa-plane'
    },
    {
        title: 'Islamic Theme',
        description: 'View your selected Islamic theme for a peaceful atmosphere.',
        link: 'themes.html#islamic-theme',
        image: 'https://via.placeholder.com/350x200?text=Islamic+Theme',
        icon: 'fa-palette'
    }
];

// Dynamically load bookmarks
const bookmarksContainer = document.getElementById('bookmarks-container');

bookmarks.forEach(bookmark => {
    const card = document.createElement('div');
    card.classList.add('bookmark-card');

    card.innerHTML = `
        <a href="${bookmark.link}">
            <img src="${bookmark.image}" alt="${bookmark.title}">
            <div class="content">
                <h3><i class="fas ${bookmark.icon}"></i> ${bookmark.title}</h3>
                <p>${bookmark.description}</p>
            </div>
        </a>
    `;

    bookmarksContainer.appendChild(card);
});

// Dark/Light Mode Toggle
const themeToggleButton = document.getElementById('theme-toggle');
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
