import React, { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
// import Player from "./Player";

import "./App.css";
import Login from "./Login";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(0);

  useEffect(() => {
    // Set token.
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("User is : ", user);
      });
    }

    console.log("I have a token ", _token);
  }, []);

  return <div className="app">{token ? <h1>Welcome</h1> : <Login />}</div>;
}

export default App;
//test
