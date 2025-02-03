# server.py

from flask import Flask, request, jsonify
from langchain_wrapper import generate_response  # Import the LangChain function

app = Flask(__name__)

@app.route('/api/query', methods=['POST'])
def query_deengpt():
    data = request.json
    question = data.get('question', '')
    if not question:
        return jsonify({'error': 'Question is required'}), 400
    
    # Get the response from LangChain (DeenGPT)
    answer = generate_response(question)
    return jsonify({'answer': answer})

if __name__ == '__main__':
    app.run(debug=True)
