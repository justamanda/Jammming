import React, { Component } from "react";
import "./App.css";
import Playlist from "../Playlist/Playlist.js";
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>

        <div className="App">
          <div class="App-playlist" />
        </div>
      </div>
    );
  }
}

export default App;
