async function askDeenGPT() {
    let question = document.getElementById("question").value;
    let responseBox = document.getElementById("answer");

    responseBox.innerText = "Thinking...";
    
    let response = await fetch("http://127.0.0.1:5000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question })
    });

    let data = await response.json();
    responseBox.innerText = data.response;
}
