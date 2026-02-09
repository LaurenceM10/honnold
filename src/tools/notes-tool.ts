import { tool } from "@openai/agents";
import { z } from "zod";
import path from "path";
import fs from "fs";


const notesDirectory = path.join(process.env.NOTES_DIRECTORY || '');

export const writeNote = tool({
    name: "write-tool",
    description: "Write a note in markdown format",
    parameters: z.object({
        note: z.string().describe("The note content to write formatted in markdown"),
        title: z.string().describe("The title of the note based on the note content"),
    }),
    async execute({ note, title }) {
        console.log(`Writing note: ${note} with title: ${title}`);
        // write the note as it comes in
        fs.writeFileSync(path.join(notesDirectory, `${title}.md`), `${note}\n`);
    },
});


