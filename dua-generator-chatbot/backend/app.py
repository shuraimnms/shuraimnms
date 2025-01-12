from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

# Load the duas from the JSON file
def load_duas():
    file_path = r'C:\Users\shura\OneDrive\Desktop\shuraim.ai\zikrmate.com\dua-generator-chatbot\backend\data\duas.json'
    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as file:
            return json.load(file)
    else:
        return {}

# Load the duas data once when the app starts
duas = load_duas()

@app.route('/generate_dua', methods=['POST'])
def generate_dua():
    data = request.get_json()  # Get the JSON data from the frontend
    topic = data.get('topic', '').lower()  # Extract topic

    # Retrieve the dua for the given topic
    dua_data = duas.get(topic)

    if dua_data:
        return jsonify({
            'topic': dua_data['topic'],
            'arabic': dua_data['arabic'],
            'transliteration': dua_data['transliteration'],
            'translation': dua_data['translation'],
            'reference': dua_data['reference']
        })
    else:
        return jsonify({
            'topic': 'unknown',
            'arabic': 'اللهم ارزقنا ما هو خير لنا. آمين.',
            'transliteration': 'Allahumma ruzuqna ma huwa khayr lana. Ameen.',
            'translation': 'O Allah, grant us what is best for us. Ameen.',
            'reference': 'Unknown'
        })

if __name__ == '__main__':
    app.run(debug=True)
