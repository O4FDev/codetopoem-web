
import Head from "next/head";
import { useState } from "react";

const App = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePoem = () => {
    /*
    * Generates a poem using the api route 'api/hello' to ensure 
    * that the Bearer token is not communicated to the frontend.
    */
    setLoading(true);
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // This will set the loading text to the output which 
        // will contain the poem
        setOutput(data.output);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div>
      <Head>
        <title>CodeToPoem</title>
      </Head>
      <div className="container">
        <h1>Poem Generator</h1>
        <h2>Input code</h2>
        <textarea
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button className="gradient__button" onClick={generatePoem}>Generate Poem</button>
        {/* If loading is true, display the loading text. Else display the poem
          however, replace the new line characters with <br/> tags */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, "<br/>") }}></p>
        )}
      </div>
    </div>
  );
};

export default App;