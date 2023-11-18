import OpenAI from "openai";

export default AskGpt = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

// example
// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();
