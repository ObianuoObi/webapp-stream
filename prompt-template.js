import { ChatOpenAI } from "langchain/chat_models/openai";
import { SystemMessagePromptTemplate, HumanMessagePromptTemplate,ChatPromptTemplate } from "langchain/prompts";

import * as dotenv from "dotenv";
dotenv.config(); 

import { LLMChain } from "langchain/chains";

const translationPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate("You are a helpful assistant that translates {input_language} to {output_language}."
    ),
    HumanMessagePromptTemplate.fromTemplate(
        "{text}"
    ),
]);

const formattedPrompt = await translationPrompt.formatPromptValue({
    input_language: "English",
    output_language: "Igbo",
    text: "I love programming"
});

const model = new ChatOpenAI({ 
    temperature: 0,
}); 

// const res = await model.generatePrompt([formattedPrompt]);

// console.log(res.generations); The same action can be performed with the Chain so we import LLMChain

const chain = new LLMChain({
    prompt: translationPrompt,
    llm: model,
});

const res = await chain.call({ // Using Chain to combine our model with prompt templates
    input_language: "English",
    output_language: "Igbo",
    text: "I love programming"
})

console.log(res);