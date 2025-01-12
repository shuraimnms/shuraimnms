from transformers import pipeline

# Load GPT model (change with your model)
generator = pipeline("text-generation", model="gpt-3")

def generate_dua(topic):
    prompt = f"Generate a dua for {topic}"
    return generator(prompt, max_length=50, num_return_sequences=1)[0]['generated_text']
