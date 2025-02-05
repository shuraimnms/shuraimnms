from flask import Flask, request, jsonify, render_template
from deen_gpt import get_deen_response  # Import DeenGPT model

app = Flask(__name__, template_folder="../templates", static_folder="../static")

# Route for serving the main page
@app.route("/")
def home():
    return render_template("index.html")  # Make sure index.html exists

# API route for DeenGPT
@app.route("/deen-gpt", methods=["POST"])
def deen_gpt_query():
    user_query = request.json.get("query")
    if not user_query:
        return jsonify({"error": "Query is missing"}), 400

    response = get_deen_response(user_query)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
