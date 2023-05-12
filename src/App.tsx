import { useState } from "react";
import viteLogo from "/vite.svg";
import Filter from "./core/Filter/Filter";
import { List } from "./core/List/List";

function App() {
  return (
    <div className="wrapper">
      <div>
        <h1>Hacker News</h1>
      </div>

      <div className="main-layout">
        <Filter searchText="Some" sortBy="latest"/>
        <List/>
      </div>
    </div>
  );
}

export default App;
