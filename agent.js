// Create an LLM which uses Open AI as its LLM and give it the ability to go online and perform a google search
// Also give it a calculator tool to calculate complex transactions

import { OpenAI } from "langchain";
import * as dotenv from "dotenv";
dotenv.config(); 