import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import * as dotenv from "dotenv";
dotenv.config(); 

const template = "What would be a good company name for a company that makes {product}";

const promptTemplate = new PromptTemplate ({
    template: template,
    inputVariables: ["product"],
}); 

const model = new OpenAI({                              // instantiate a new instance of the OpenAI class
    temperature: 0.9,
}); 
// We want the promptTemplate and model components to be chained together which is how langchain works as we create several components and we use langchain to bring them together

const chain = new LLMChain({
    llm: model,
    prompt: promptTemplate,
});

  const res = await chain.call({
    product: "colorful socks"
  });

  console.log(res);


  



// const formattedPrompt = await promptTemplate.format({
//     product: "colorful socks",
// });


// console.log(formattedPrompt);

// const res = await model.call( // interface with the model using the call method
//     "What would be a good company name for a company that makes colorful socks?"
//     );

//     console.log(res);