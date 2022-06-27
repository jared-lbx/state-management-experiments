import "./App.css";
import React from "react";
import { Summary, Header, Grid } from "./components";

function App() {
  const [nameInput, setNameInput] = React.useState("");
  const [lastnameInput, setLastNameInput] = React.useState("");
  const [radioInput, setRadioInput] = React.useState("");
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-slate-50 text-lg p-2">
      <Header />
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
    </div>
  );
}

export default App;
