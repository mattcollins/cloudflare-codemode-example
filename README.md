# Cloudflare Code Mode Example

This is a simple, working example of an AI agent using
Cloudflare's 'Code Mode', based on the CodeAct pattern.

It is derived from Cloudflare's example at
https://github.com/cloudflare/agents/tree/main/examples/codemode

It demonstrates how you can define a custom tool to
be provided to the agent (see [src/tools.ts](src/tools.ts))

<img width="1481" height="810" alt="image" src="https://github.com/user-attachments/assets/36656642-1b0f-46d9-868b-f13c6e127b5e" />

## Running the demo

1. Install dependencies (`npm install`)
2. Create a `.env` file with your OpenAI API key (see `.env.example`)
3. Run `npm start` to start the development server
4. Visit `http://localhost:5173` to see the demo
5. Try asking about the weather, e.g. "How's the weather today?"
