import { ChatOpenAI } from "langchain/chat_models/openai";
import { ChatPromptTemplate,
         SystemMessagePromptTemplate,
         HumanMessagePromptTemplate,
         MessagesPlaceholder
} from "langchain/prompts"
import { BufferMemory } from "langchain/memory";

import * as dotenv from "dotenv";
import { ConversationChain } from "langchain/chains";
dotenv.config();

const model = new ChatOpenAI({})

const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate("Here is a conversation between a Human and an AI. The AI is talks a lot and provides lots of specific details from it's context. If the AI does not know the answer, it should indicate it doesnt."
    ),
    new MessagesPlaceholder("history"),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
]);

const chain = new ConversationChain({

        memory: new BufferMemory({
            returnMessages: true,
            memoryKey: "history"
        }),
        prompt: chatPrompt,
        llm: model,
    });

    const res = await chain.call({
        input: "Hello from United Kingdom, Bristol!",
    });

    console.log(res);
    