from transformers import AutoModelForCausalLM, AutoTokenizer

# Load the pre-trained DialoGPT model and tokenizer
def load_model():
    model_name = "microsoft/DialoGPT-medium"  # A conversational model
    model = AutoModelForCausalLM.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)
    
    print("Model and tokenizer loaded successfully!")
    return model, tokenizer

# Generate a response with Islamic context
def generate_response(model, tokenizer, prompt):
    # Add Islamic context to the prompt
    islamic_prompt = (
        f"Question: {prompt}\n"
        f"Answer according to Islamic teachings:"
    )
    
    # Tokenize the input prompt
    inputs = tokenizer.encode(islamic_prompt, return_tensors="pt")
    
    # Generate a response
    outputs = model.generate(
        inputs,
        max_length=200,          # Increase max_length for longer responses
        num_return_sequences=1,  # Number of responses to generate
        no_repeat_ngram_size=2,  # Avoid repeating phrases
        top_k=50,                # Limit the selection to the top 50 words
        top_p=0.95,              # Use nucleus sampling
        temperature=0.7,         # Control randomness (0.7 is a good balance)
        pad_token_id=tokenizer.eos_token_id  # Set pad token ID
    )
    
    # Decode the output (convert numbers back to text)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    # Remove the added context from the response
    response = response.replace(islamic_prompt, "").strip()
    return response

# Chat loop
def chat(model, tokenizer):
    print("Islamic Chatbot is ready! Type 'exit' to stop.")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            print("Goodbye!")
            break
        response = generate_response(model, tokenizer, user_input)
        print(f"Bot: {response}")

# Main function
if __name__ == "__main__":
    model, tokenizer = load_model()
    chat(model, tokenizer)  # Start the chat loop