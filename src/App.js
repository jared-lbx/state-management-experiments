import "./App.css";
import React from "react";
import { Summary, Header, Grid, Markdown } from "./components";
import {
  FirstNameProvider,
  LastNameProvider,
  RadioInputProvider,
} from "./contexts";

function App() {
  return (
    <FirstNameProvider>
      <LastNameProvider>
        <RadioInputProvider>
          <div className="container w-9/12 px-4 min-h-screen min-w-full flex flex-col bg-zinc-900 text-slate-50 text-lg p-2">
            <Header name={"Clever Context"} />
            <Summary />
            <Grid />
            <Markdown />
          </div>
        </RadioInputProvider>
      </LastNameProvider>
    </FirstNameProvider>
  );
}

export default App;
