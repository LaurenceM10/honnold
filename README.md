# Honnold

![Honnold](./assets/honnold.png)

Honnold is a local AI agent built with the OpenAI Agents SDK and Bun.
It converts user input into Markdown notes and saves them to disk through a tool.


## What it does

- Defines an agent in `src/agent.ts`
- Applies note-focused behavior from `src/honnold-instructions.ts`
- Persists notes via `src/tools/notes-tool.ts`

## Requirements

- [Bun](https://bun.com)
- A running Ollama-compatible endpoint (or compatible OpenAI-style chat completions API)

## Setup

Install dependencies:

```bash
bun install
```

Create environment variables (for local development, use `.env.development`):

```bash
OPENAI_AGENTS_DISABLE_TRACING=1
OLLAMA_BASE_URL=http://localhost:11434/v1/
NOTES_DIRECTORY=~/Documents/Notes/Honnold
```

## Run

```bash
bun run index.ts
```

## Project structure

```text
.
├── index.ts
└── src
    ├── agent.ts
    ├── honnold-instructions.ts
    └── tools
        └── notes-tool.ts
```
