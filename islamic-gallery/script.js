document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");

    const images = [
        { id: "1mzKXv9IT9TvWLkoIqKhZABYOMIDVCLRU", url: "https://drive.google.com/file/d/1mzKXv9IT9TvWLkoIqKhZABYOMIDVCLRU/view?usp=sharing" },
        { id: "14eMap7_FliBQXPF5ln3gByvo0V2tUeon", url: "https://drive.google.com/file/d/14eMap7_FliBQXPF5ln3gByvo0V2tUeon/view?usp=sharing" },
        { id: "151DiZSYmN9ph7rb9dqMvN2OEGXNkUM6c", url: "https://drive.google.com/file/d/151DiZSYmN9ph7rb9dqMvN2OEGXNkUM6c/view?usp=sharing" },
        { id: "1pN5yrUt9VxRGd0RZ0QQB2lXS5MrsCWKv", url: "https://drive.google.com/file/d/1pN5yrUt9VxRGd0RZ0QQB2lXS5MrsCWKv/view?usp=sharing" },
        { id: "1JDT5k8w-oj8nEDwnjcE_rcDlFxZQN8KC", url: "https://drive.google.com/file/d/1JDT5k8w-oj8nEDwnjcE_rcDlFxZQN8KC/view?usp=sharing" }
    ];

    // Shuffle images on each visit
    images.sort(() => Math.random() - 0.5);

    images.forEach(image => {
        const item = document.createElement("div");
        item.classList.add("gallery-item");

        item.innerHTML = `
            <img src="https://lh3.googleusercontent.com/d/${image.id}=w1000-h800" alt="Islamic Zikr Image">
            <div class="buttons">
                <a class="btn download-btn" href="https://drive.google.com/uc?export=download&id=${image.id}" download>Download</a>
                <button class="btn share-btn" onclick="shareImage('${image.url}')">Share</button>
            </div>
        `;

        gallery.appendChild(item);
    });
});

function shareImage(imageUrl) {
    if (navigator.share) {
        navigator.share({
            title: 'Islamic Zikr Image',
            text: 'Check out this beautiful Islamic zikr image!',
            url: imageUrl
        }).catch((error) => console.log('Error sharing:', error));
    } else {
        alert('Sharing not supported on this browser. Try copying the link manually.');
    }
}
