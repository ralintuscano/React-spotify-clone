import React, { useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
// import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

import "./App.css";
import Login from "./Login";
import Player from "./Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    // Set token.
    const hash = getTokenFromUrl();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("User is : ", user);

        dispatch({
          type: "SET_USER",
          user,
        });
      });
    }

    console.log("I have a token ", _token);
  }, []);

  console.log("User ", user);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
//test
