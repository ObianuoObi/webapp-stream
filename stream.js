import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";
dotenv.config(); 

const model = new OpenAI({
   streaming: true,
   callbacks: [
    {
        handleLLMNewToken(token){
            process.stdout.write(token)
        }
    }
   ] 
});

await model.call("How do I get a job in Artificial Intelligence with knowledge in JavaScript")