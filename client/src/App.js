import React, { useState } from "react";
import "./App.css";

import SignUp from "./components/signup";
import SignIn from "./components/signin";
import Jokes from "./components/jokes";

function App() {
  const [token, setToken] = useState({});

  return (
    <div className="App">
      <SignUp />
      <SignIn setToken={setToken} />
      <br />
      <Jokes token={token} />
    </div>
  );
}

export default App;
