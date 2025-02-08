from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Set DeepSeek AI API Key (Free Model)
DEEPSEEK_API_KEY = "sk-1b4bc58c37ea47669aa7d16321da6ee9"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get("message", "")

    try:
        response = openai.ChatCompletion.create(
            model="deepseek-ai/deepseek-chat",
            messages=[
                {"role": "system", "content": "You are DeenGPT, an AI assistant providing responses based on Islamic teachings."},
                {"role": "user", "content": user_message}
            ],
            api_key=DEEPSEEK_API_KEY
        )

        reply = response['choices'][0]['message']['content']
        return jsonify({"response": reply})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
