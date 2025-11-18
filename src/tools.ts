import { tool, jsonSchema } from 'ai';

export const tools = {
  getWeather: tool({
    description: 'Returns a silly canned weather string.',
    inputSchema: jsonSchema({
      type: 'object',
      properties: {},
      additionalProperties: false
    }),
    outputSchema: jsonSchema({
      type: 'string'
    }),
    execute: () => "It's cold. Brrrrrrrr!"
  })
};
