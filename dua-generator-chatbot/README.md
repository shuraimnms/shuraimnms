# Dua Generator Chatbot

## Project Overview
The Dua Generator Chatbot is an AI-powered application designed to provide users with authentic Islamic duas, Quranic verses, and Hadith. The project consists of a backend API built with Flask and a frontend interface that allows users to interact with the chatbot.

## Project Structure
```
dua-generator-chatbot
├── backend
│   ├── app.py                # Main entry point for the Flask application
│   ├── models
│   │   └── gpt_model.py      # Implementation for loading and using the fine-tuned GPT model
│   ├── data
│   │   ├── duas.json         # JSON file containing a list of duas
│   │   ├── quran.json        # JSON file containing a list of Quranic verses
│   │   └── hadith.json       # JSON file containing a list of Hadith
│   └── requirements.txt      # Required Python packages for the backend
├── frontend
│   ├── index.html            # Main HTML file for the frontend interface
│   ├── styles.css            # CSS styles for the frontend
│   └── app.js                # JavaScript code for fetching data from the Flask API
├── README.md                 # Documentation for the project
└── .gitignore                # Specifies files and directories to ignore by Git
```

## Setup Instructions

### Backend Setup
1. Navigate to the `backend` directory.
2. Install the required packages using:
   ```
   pip install -r requirements.txt
   ```
3. Run the Flask application:
   ```
   python app.py
   ```

### Frontend Setup
1. Open `index.html` in a web browser to access the chatbot interface.

## Usage
- To generate a dua, enter a topic in the provided input field and submit the form.
- To ask a question, use the designated question input field and submit.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License
This project is open-source and available under the MIT License.