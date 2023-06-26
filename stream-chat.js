import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage } from "langchain/schema";
import * as dotenv from "dotenv";
dotenv.config();

const model = new ChatOpenAI({
    streaming: true,
    callbacks: [
        {
             handleLLMNewToken(token){
                process.stdout.write(token)
             }

        }
]

});

const res = await model.call([
    new HumanChatMessage("Write a song about web development ")
]);
