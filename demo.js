import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import * as dotenv from "dotenv";
dotenv.config(); 

const template = "What would be a good company name for a company that makes {product}"
const promptTemplate = new PromptTemplate ({
    template: template,
    inputVariables: ["product"],
}); 

const model = new OpenAI({ // instantiate a new instance of the OpenAI class
    temperature: 0.9,
}); 

const res = await model.call( // interface with the model using the call method
    "What would be a good company name for a company that makes colorful socks?"
    );

    console.log(res);