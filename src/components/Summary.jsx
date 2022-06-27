import { RenderCounter } from "./";

export function Summary({ nameInput, lastnameInput, radioInput }) {
  return (
    <div className="border p-2">
      <div className="w-full flex flex-row justify-end align-end">
        <RenderCounter />
      </div>
      <h3>Firstname: {nameInput}</h3>
      <h3>Lastname: {lastnameInput}</h3>
      <h3>Selection: {radioInput}</h3>
    </div>
  );
}
