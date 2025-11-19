# Cloudflare Code Mode Example

This is a simple, working example of an AI agent using
Cloudflare's 'Code Mode', based on the CodeACT pattern.

It is derived from Cloudflare's example at
https://github.com/cloudflare/agents/tree/main/examples/codemode

It demonstrates how you can define a custom tool to
be provided to the agent (see [src/tools.ts](src/tools.ts))

<img width="3024" height="1634" alt="Screenshot of Code Mode demo" src="https://github.com/user-attachments/assets/53f06c50-df7a-40e6-9e1c-b788049f8637" />

## Running the Demo

1. Install dependencies (`npm install`)
2. Create a `.env` file with your OpenAI API key (see `.env.example`)
3. Run `npm start` to start the development server
4. Visit `http://localhost:5173` to see the demo
5. Try asking about the weather, e.g. "How's the weather today?"

## How Code Mode Works

Here's a sequence diagram showing how Code Mode works.
<img width="2060" height="1040" alt="cloudflare-codemode-sequence-diagram" src="https://github.com/user-attachments/assets/204210d9-089a-46c1-9718-6f78cdffd593" />
