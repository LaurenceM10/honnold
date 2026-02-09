import { run } from "@openai/agents";

// run the agent and pass a test note to it
import honnold from "./src/agent";

const result = await run(honnold, 'write a note about the weather today');

console.log(result.finalOutput);