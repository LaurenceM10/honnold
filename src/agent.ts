import OpenAI from "openai";
import { Agent, OpenAIChatCompletionsModel } from "@openai/agents";

// Instructions
import { honnoldInstructions } from "./honnold-instructions";

// Agent tools
import { writeNote } from "./tools/notes-tool";

const ollamaClient = new OpenAI({
    baseURL: process.env.OLLAMA_BASE_URL, // Default Ollama API endpoint
    apiKey: 'ollama', // API key is required but ignored by Ollama
});


// use llama 3.2 as the model
const ollamaModel = new OpenAIChatCompletionsModel(ollamaClient, 'qwen3-vl:latest');


const honnold = new Agent({
  name: "Honnold",
  instructions: honnoldInstructions,
  tools: [writeNote],
  model: ollamaModel,
  modelSettings: {
    temperature: 0,
  },
});

export default honnold;