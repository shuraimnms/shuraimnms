from transformers import AutoModelForCausalLM, AutoTokenizer

MODEL_NAME = "microsoft/DialoGPT-medium"  # Use a different model

# Load model and tokenizer
tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
model = AutoModelForCausalLM.from_pretrained(MODEL_NAME)

def generate_response(question):
    inputs = tokenizer(question, return_tensors="pt")
    output = model.generate(
        **inputs,
        max_length=200,
        num_return_sequences=1,
        no_repeat_ngram_size=2,
        early_stopping=True
    )
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    print(f"Generated response: {response}")  # Debugging information
    return response
