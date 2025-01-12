document.getElementById('send-btn').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;
  
    // Display user's message
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="user-message">${userInput}</div>`;
    document.getElementById('user-input').value = '';
  
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  
    try {
      // Send the question to the backend API
      const response = await fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userInput })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Display the AI's response
      chatBox.innerHTML += `<div class="ai-response">${data.answer || "Error: No response received."}</div>`;
    } catch (error) {
      chatBox.innerHTML += `<div class="ai-response">Error: ${error.message}</div>`;
    }
  
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  });
  async function sendMessage() {
    const input = document.getElementById("userInput").value;

    if (!input) {
        alert("Please enter a message.");
        return;
    }

    console.log("Sending message:", input);  // Log the input to the console

    try {
        // Send the input to the server using POST request
        const response = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "input": input })  // Ensure the correct JSON structure
        });

        // Parse the JSON response
        const result = await response.json();

        if (response.ok) {
            // Update the chat response area with the result from the server
            document.getElementById("chatResponse").innerText = result.response;
        } else {
            // Handle error if response is not OK
            document.getElementById("chatResponse").innerText = "Error: " + result.error;
        }
    } catch (error) {
        // Handle fetch errors (e.g., network issues)
        console.error("Error during the fetch operation:", error);
        document.getElementById("chatResponse").innerText = "Error: " + error.message;
    }
}
