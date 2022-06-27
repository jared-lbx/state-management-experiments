import logo from "./logo.svg";
import "./App.css";
import React from "react";

function RenderCounter() {
  const renderCounter = React.useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <div className="w-8">
      <span className="text-sm text-gray-500">{renderCounter.current}x</span>
    </div>
  );
}

function Input({ value, setValue, name }) {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-300"
        >
          {name}
        </label>
        <RenderCounter />
      </div>
      <div className="mt-1 mx-auto">
        <input
          type="text"
          name="name"
          id="name"
          className="shadow-sm px-1 font-medium h-6 text-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md bg-zinc-700"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}

function App() {
  const [nameInput, setNameInput] = React.useState("");
  const [lastnameInput, setLastNameInput] = React.useState("");
  const [radioInput, setRadioInput] = React.useState("");
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 text-slate-50 text-lg p-2">
      <nav className="pb-2 mb-2 border-b-2 flex flex-row justify-between items-center">
        <img src={logo} className="w-8" alt="an icon" />
        <h1>State Management Re-Render Comparison</h1>
        <RenderCounter />
      </nav>
      <div className="border p-2">
        <div className="w-full flex flex-row justify-end align-end">
          <RenderCounter />
        </div>
        <h3>Firstname: {nameInput}</h3>
        <h3>Lastname: {lastnameInput}</h3>
        <h3>Selection: {radioInput}</h3>
      </div>
      <Grid
        name={{ value: nameInput, handle: setNameInput }}
        lastname={{ value: lastnameInput, handle: setLastNameInput }}
        radio={{ value: radioInput, handle: setRadioInput }}
      />
    </div>
  );
}

function Grid({ name, lastname, radio }) {
  return (
    <div className="mt-5 flex p-2 border">
      <RenderCounter />
      <div className="mt-4 grid grid-cols-2 p-2 w-full justify-items-center">
        <div className="w-64 border m-4 p-2">
          <Input value={name.value} setValue={name.handle} name={"Firstname"} />
        </div>
        <div className="w-64 border m-4 p-2">
          <Input
            value={lastname.value}
            setValue={lastname.handle}
            name={"Lastname"}
          />
        </div>
        <div className="w-64 border p-2">
          <Radio value={radio.value} setValue={radio.handle} />
        </div>
      </div>
    </div>
  );
}

const choices = [
  { id: "1", title: "This one" },
  { id: "2", title: "No, this one" },
  { id: "3", title: "On second thought, this one" },
];

function Radio({ value, setValue }) {
  return (
    <div>
      <div className="flex justify-between">
        <label className="block text-sm font-medium text-gray-300">
          Choices
        </label>
        <RenderCounter />
      </div>
      <p className="text-sm leading-5 text-gray-500">
        Which choice do you choose?
      </p>
      <fieldset className="mt-4">
        <div className="space-y-4">
          {choices.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                onChange={() => {
                  setValue(notificationMethod.title);
                }}
                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
              />
              <label
                htmlFor={notificationMethod.id}
                className={`ml-3 block text-sm font-medium  ${
                  value === notificationMethod.title
                    ? "text-emerald-400"
                    : "text-gray-400"
                }`}
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}

export default App;
