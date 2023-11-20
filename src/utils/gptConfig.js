import OpenAI from "openai";

console.log("REACT_APP_GPT_API_KEY", process.env.REACT_APP_GPT_API_KEY);
const AskGpt = new OpenAI({
  apiKey: process.env.REACT_APP_GPT_API_KEY,
  dangerouslyAllowBrowser: true,
});
export default AskGpt;

// example
// async function main() {
//   const chatCompletion = await openai.chat.completions.create({
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     model: 'gpt-3.5-turbo',
//   });
// }

// main();
