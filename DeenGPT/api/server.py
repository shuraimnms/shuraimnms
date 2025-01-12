import requests

# Replace this with your generated token
import os
HF_ACCESS_TOKEN = os.getenv('HF_ACCESS_TOKEN')


# Set the URL for the desired model (e.g., microsoft/phi-4)
API_URL = "https://api-inference.huggingface.co/models/microsoft/phi-4"

# Add Authorization header
HEADERS = {"Authorization": f"Bearer {API_TOKEN}"}

# Define a function to query the model
def query_huggingface_api(prompt):
    # The input to the model
    data = {"inputs": prompt}

    # Make the POST request
    response = requests.post(API_URL, headers=HEADERS, json=data)

    # Check the response status
    if response.status_code == 200:
        print("Response from API:", response.json())
    else:
        print(f"Error: {response.status_code}, {response.text}")

# Query the model with an example prompt
query_huggingface_api("Assalamu Alaikum")
