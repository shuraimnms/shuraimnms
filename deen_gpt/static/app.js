async function askDeenGPT() {
    const userQuery = document.getElementById("deenGPTInput").value;
    if (!userQuery) {
        alert("Please enter a question!");
        return;
    }

    const response = await fetch("/deen-gpt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ query: userQuery })
    });

    const data = await response.json();
    document.getElementById("deenGPTResponse").innerText = data.response || "Error fetching response.";
}
