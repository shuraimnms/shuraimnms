import openai

openai.api_key = "YOUR_HUGGINGFACE_API_KEY"  # Add your Hugging Face API key here

def get_deen_response(user_query):
    prompt = f"Answer the following query strictly from an Islamic perspective: {user_query}"
    response = openai.Completion.create(
        engine="gpt-3.5-turbo",  # Replace with the model you're using
        prompt=prompt,
        max_tokens=150,
        temperature=0.7,
    )
    return response.choices[0].text.strip()  # Extract and return the answer
