function generateDua() {
    let topic = document.getElementById('duaInput').value;

    fetch('http://127.0.0.1:5000/generate_dua', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ topic: topic })
    })
    .then(response => response.json())
    .then(data => {
        // Display all fields: topic, arabic, transliteration, translation, reference
        document.getElementById('dua-topic').textContent = "Topic: " + data.topic;
        document.getElementById('dua-arabic').textContent = "Arabic: " + data.arabic;
        document.getElementById('dua-transliteration').textContent = "Transliteration: " + data.transliteration;
        document.getElementById('dua-translation').textContent = "Translation: " + data.translation;
        document.getElementById('dua-reference').textContent = "Reference: " + data.reference;
    })
    .catch(error => console.error('Error:', error));
}
