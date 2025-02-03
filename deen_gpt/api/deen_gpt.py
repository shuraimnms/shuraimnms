# deen_gpt.py

from transformers import AutoModelForCausalLM, AutoTokenizer

# Load the model and tokenizer from Hugging Face
model_name = "gpt2"  # Replace with your Hugging Face model name
tokenizer = AutoTokenizer.from_pretrained(model_name)

# Load model with weights_only=True for better security
model = AutoModelForCausalLM.from_pretrained(model_name, weights_only=True)

# Function to generate a response
def generate_response(input_text):
    # Tokenize the input text
    inputs = tokenizer(input_text, return_tensors="pt")
    # Generate the response
    outputs = model.generate(inputs["input_ids"], max_length=200)
    # Decode and return the generated text
    return tokenizer.decode(outputs[0], skip_special_tokens=True)
