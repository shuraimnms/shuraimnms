# langchain_wrapper.py

from langchain.prompts import PromptTemplate
from langchain.chains import LLMChain
from transformers import pipeline

# Load the Hugging Face model using LangChain
model_name = "gpt2"  # Replace with your Hugging Face model name
chatbot = pipeline("text-generation", model=model_name, tokenizer=model_name)

# Create a prompt template for LangChain
prompt_template = PromptTemplate(input_variables=["question"], template="Answer the following question: {question}")

# Create a LangChain wrapper for the chatbot
chain = LLMChain(llm=chatbot, prompt=prompt_template)

# Function to generate response using LangChain
def generate_response(input_text):
    return chain.run(input_text)
