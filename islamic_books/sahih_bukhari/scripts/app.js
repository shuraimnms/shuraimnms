document.addEventListener('DOMContentLoaded', function () {
    const data = sahihBukhariData; // Use the JavaScript variable from sahih_bukhari.js

    let volumeList = document.getElementById('volumeList');
    let searchBar = document.getElementById('searchBar');
    let htmlContent = '';

    // Generate volume list
    function displayVolumes() {
        htmlContent = '';
        data.forEach((volume, index) => {
            htmlContent += `
                <div class="volume" data-index="${index}">
                    <h3>Volume ${index + 1}: ${volume.name}</h3>
                </div>
            `;
        });
        volumeList.innerHTML = htmlContent;

        // Add event listeners to each volume
        let volumes = document.querySelectorAll('.volume');
        volumes.forEach(volume => {
            volume.addEventListener('click', function () {
                let index = this.getAttribute('data-index');
                displayVolumeDetails(data[index]);
            });
        });
    }

    // Display volume details
    function displayVolumeDetails(volume) {
        let bookDetails = document.getElementById('bookDetails');
        let bookTitle = document.getElementById('bookTitle');
        let bookContent = document.getElementById('bookContent');

        bookTitle.textContent = volume.name;

        let booksHtml = '';
        volume.books.forEach(book => {
            booksHtml += `<h4>${book.name}</h4>`;
            book.hadiths.forEach(hadith => {
                booksHtml += `
                    <div class="hadith">
                        <p><strong>${hadith.info}</strong></p>
                        <p>${hadith.text}</p>
                        <p><em>${hadith.by}</em></p>
                    </div>
                `;
            });
        });

        bookContent.innerHTML = booksHtml;
        bookDetails.style.display = 'block';
        volumeList.style.display = 'none';
    }

    // Go back to the volume list
    function goBack() {
        document.getElementById('bookDetails').style.display = 'none';
        volumeList.style.display = 'block';
    }

    // Search functionality
    function searchContent(query) {
        query = query.toLowerCase(); // Case insensitive search
        let searchResults = [];
        
        // Search in volumes, books, and hadiths
        data.forEach(volume => {
            let matchedVolume = false;
            let books = [];

            volume.books.forEach(book => {
                let matchedBook = false;
                let hadiths = book.hadiths.filter(hadith => 
                    hadith.text.toLowerCase().includes(query) || 
                    hadith.info.toLowerCase().includes(query) || 
                    hadith.by.toLowerCase().includes(query)
                );

                if (hadiths.length > 0) {
                    matchedBook = true;
                }

                if (matchedBook) {
                    books.push({
                        name: book.name,
                        hadiths: hadiths
                    });
                    matchedVolume = true;
                }
            });

            if (matchedVolume) {
                searchResults.push({
                    name: volume.name,
                    books: books
                });
            }
        });

        displaySearchResults(searchResults);
    }

    // Display search results
    function displaySearchResults(results) {
        htmlContent = '<h2>Search Results:</h2>';

        if (results.length === 0) {
            htmlContent += '<p>No results found.</p>';
        } else {
            results.forEach((volume, index) => {
                htmlContent += `<h3>Volume ${index + 1}: ${volume.name}</h3>`;
                volume.books.forEach(book => {
                    htmlContent += `<h4>${book.name}</h4>`;
                    book.hadiths.forEach(hadith => {
                        htmlContent += `
                            <div class="hadith">
                                <p><strong>${hadith.info}</strong></p>
                                <p>${hadith.text}</p>
                                <p><em>${hadith.by}</em></p>
                            </div>
                        `;
                    });
                });
            });
        }

        volumeList.innerHTML = htmlContent;
    }

    // Listen for search input
    searchBar.addEventListener('input', function () {
        const query = searchBar.value;
        if (query.trim() === '') {
            displayVolumes(); // Show default volumes list if search is empty
        } else {
            searchContent(query);
        }
    });

    // Initial display of volumes
    displayVolumes();

    window.goBack = goBack; // Make goBack globally accessible
});
