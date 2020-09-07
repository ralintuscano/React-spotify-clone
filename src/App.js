import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";

import "./App.css";
import Login from "./Login";

function App() {
  const [token, setToken] = useState(0);

  useEffect(() => {
    // Set token.
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("I have a token ", _token);
  }, []);

  return (
    <div className="app">{token ? <h1>I am logged In!</h1> : <Login />}</div>
  );
}

export default App;
