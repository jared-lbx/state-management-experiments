import "./App.css";
import React from "react";
import { Summary, Header, Grid } from "./components";

function App() {
  return (
    <div className="container w-9/12 px-4 min-h-screen min-w-full flex flex-col bg-zinc-900 text-slate-50 text-lg p-2">
      <Header name={"Zustand"} />
      <Summary />
      <Grid />
    </div>
  );
}

export default App;
