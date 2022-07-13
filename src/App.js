import "./App.css";
import React from "react";
import { Summary, Header, Grid, Markdown } from "./components";

function App() {
  const [nameInput, setNameInput] = React.useState("");
  const [lastnameInput, setLastNameInput] = React.useState("");
  const [radioInput, setRadioInput] = React.useState("");
  return (
    <div className="container w-9/12 px-4 min-h-screen min-w-full flex flex-col bg-zinc-900 text-slate-50 text-lg p-2">
      <Header name={"Use State"} />
      <Summary
        nameInput={nameInput}
        lastnameInput={lastnameInput}
        radioInput={radioInput}
      />
      <Grid
        name={{ value: nameInput, handle: setNameInput }}
        lastname={{ value: lastnameInput, handle: setLastNameInput }}
        radio={{ value: radioInput, handle: setRadioInput }}
      />
      <Markdown />
    </div>
  );
}

export default App;
