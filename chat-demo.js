import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanChatMessage, SystemChatMessage } from "langchain/schema";

import * as dotenv from "dotenv";
dotenv.config(); 

const model = new ChatOpenAI({ 
    temperature: 0,
}); 

// const res = await model.call([
//     new SystemChatMessage(
//         "You are a helpful assistant that translates English to Igbo."
//     ),
//     new HumanChatMessage(
//         "Translate this sentence from English to Igbo. I love programming."
//     ), // used when data is returned from human
    
// ]); // this works perfecly with the model.call method including the model.generate method below

const res = await model.generate([
    [ new SystemChatMessage(
               "You are a helpful assistant that translates English to Igbo."
             ),
             new HumanChatMessage(
             "Translate this sentence from English to Igbo. I love programming."
             ),
    ],
    [ new SystemChatMessage(
        "You are a helpful assistant that translates English to French."
      ),
      new HumanChatMessage(
      "Translate this sentence from English to French. I love programming."
      ),
],
]);

console.log(res.generations);