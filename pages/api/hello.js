const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  // Create a new configuration object with your API key.
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  // Create a new API instance using the highest available text-model.
  const response = await openai.createCompletion("text-davinci-001", {
    // Get the code from the request body
    prompt: `The user provided this code, please make a poem from it:\n###\n${req.body.code}\n###\n`,
    // Controls randomness of the generated poem.
    temperature: 0.63,
    // Max token allows for roughly 400 characters to be generated
    max_tokens: 100,
    // Controls diversity of the generated poem.
    top_p: 1,
    // A high frequency penalty to encourage diversity in the generated poem
    frequency_penalty: 1.55,
    // Highest presence penalty to ensure the code is not used in the poem
    presence_penalty: 2,
    // Best of one try
    n: 1,
    // Data will not be continuously updated
    stream: false
  });
  res.statusCode = 200;
  res.json({
    // Only send the poem from the SDK.
    output: response.data.choices[0].text
  });
  res.end();
}
