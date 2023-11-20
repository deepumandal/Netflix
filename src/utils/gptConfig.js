import OpenAI from "openai";

export default AskGpt = new OpenAI({
  apiKey: process.env.REACT_APP_GPT_API_KEY,
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
