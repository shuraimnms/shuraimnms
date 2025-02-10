from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)

# Load the Falcon-7B Model
MODEL_NAME = "tiiuae/falcon-7b-instruct"
device = "cuda" if torch.cuda.is_available() else "cpu"

print("Loading model...")
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME, torch_dtype=torch.float16).to(device)
print("Model loaded successfully.")

@app.route("/")
def home():
    return "DeenGPT Backend is running!"

@app.route("/ask", methods=["POST"])
def ask():
    try:
        # Get user input from request
        data = request.json
        print("Received data:", data)  # Debugging

        user_input = data.get("question", "").strip()
        if not user_input:
            return jsonify({"response": "Please provide a question."})

        # Generate response using Falcon-7B
        inputs = tokenizer(user_input, return_tensors="pt").to(device)
        output_tokens = model.generate(**inputs, max_length=200)
        response_text = tokenizer.decode(output_tokens[0], skip_special_tokens=True)

        return jsonify({"response": response_text})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"response": "Sorry, an error occurred. Please try again."}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
