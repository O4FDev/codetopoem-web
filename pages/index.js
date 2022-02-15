
import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

console.log(process.env.OPENAI_API_KEY);

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const App = ({ props }) => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePoem = async () => {
    setLoading(true);
    const response = await openai.createCompletion("text-davinci-001", {
      prompt: `The user provided this code, please make a poem from it:\n###\n${code}\n###\n`,
      temperature: 0.63,
      max_tokens: 672,
      top_p: 0.49,
      frequency_penalty: 1.55,
      presence_penalty: 2,
      n: 1,
      stream: false
    });
    setOutput(response.data.choices[0].text);
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Poem Generator</h1>
      <h2>Input code</h2>
      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
      />
      <button className="gradient__button" onClick={generatePoem}>Generate Poem</button>
      <p>{loading ? "Loading..." : output}</p>
    </div>
  );
};

export default App;