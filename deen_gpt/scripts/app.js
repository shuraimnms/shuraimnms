// app.js

async function askDeenGPT() {
    const question = document.getElementById('question').value;
    const responseDiv = document.getElementById('answer');
    
    if (!question) {
        responseDiv.innerHTML = 'Please ask a question.';
        return;
    }

    try {
        // Send a POST request to the Flask server
        const response = await fetch('http://127.0.0.1:5000/api/query', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ question: question })
        });

        if (response.ok) {
            const data = await response.json();
            responseDiv.innerHTML = `<strong>Answer:</strong> ${data.answer}`;
        } else {
            responseDiv.innerHTML = 'Error: Unable to get an answer.';
        }
    } catch (error) {
        responseDiv.innerHTML = 'An error occurred. Please try again.';
    }
}
