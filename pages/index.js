
import { useState } from "react";
const { Configuration, OpenAIApi } = require("openai");

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

    // Make a request to 'hello' endpoint
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: code,
    })
      .then((res) => res.json())
      .then((data) => {
        setOutput(data.output);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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

// Server side request when the form is submitted
export const getServerSideProps = async () => {
  return { props: {} };
};

export default App;