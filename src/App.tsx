import React, { useState } from 'react';
import './App.css';

// eslint-disable-next-line import/no-webpack-loader-syntax
import createWorker from "workerize-loader!./worker" // import the module
import * as Worker from "./worker"; // import the types

const workerMessage = (async ():Promise<string> => {
  const worker = createWorker<typeof Worker>();
  return await worker.getMessage();
})();

function App() {
  const [message, setMessage] = useState("...");
  workerMessage.then(x => setMessage(x));
  return <div className="App">Worker says "{message}"</div>;
}

export default App;
