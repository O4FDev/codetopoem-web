// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const response = await openai.createCompletion("text-davinci-001", {
    prompt: `The user provided this code, please make a poem from it:\n###\n${req.body}\n###\n`,
    temperature: 0.63,
    max_tokens: 100,
    top_p: 0.49,
    frequency_penalty: 1.55,
    presence_penalty: 2,
    n: 1,
    stream: false
  });
  res.statusCode = 200;
  res.json({
    output: response.data.choices[0].text
  });
  res.end();
}
