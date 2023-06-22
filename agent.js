// Create an LLM which uses Open AI as its LLM and give it the ability to go online and perform a google search
// Also give it a calculator tool to calculate complex transactions

import { OpenAI } from "langchain/llms/openai";
import { SerpAPI} from "langchain/tools";
import { Calculator } from "langchain/tools/calculator";
import { initializeAgentExecutorWithOptions} from "langchain/agents";

import * as dotenv from "dotenv";
dotenv.config(); 


const model = new OpenAI({
    temperature: 0,
});

// specify list of tools that LangChain should make available

const tools = [
    new SerpAPI(process.env.SERPAPI_API_KEY, {
        hl: "en",
        gl: "us",
    }),
    new Calculator()
];

// Now that we have our model and list of tools, we want to get Langchain to trigger
// the Agent to manage the input to our model and to assign tools when the model needs assistance to get the answers


const executor = await initializeAgentExecutorWithOptions(tools, model, {
    agentType: "zero-shot-react-description"
    
});
console.log("Loading the agent..")

const res = await executor.call({
    input: "What are the JavaScript basics you need to know to start working with TensorFlow?",
});

console.log(res.output);




