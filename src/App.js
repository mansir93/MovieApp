import React from "react";
import "./App.css";
import SearchMovie from "./components/SearchMovie";

const App = () => {
  // javascript codes goes here

  return (
    <div className="container">
      <h1 className="title" id="startShow">
        MOVIE SEARCH
      </h1>

      <SearchMovie />
    </div>
  );
};

export default App;
