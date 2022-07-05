import React from "react";
import { RenderCounter } from "./";
import { useLastName, useFirstName, useRadioInput } from "../store";

export function Summary() {
  const [firstName] = useFirstName();
  const [lastName] = useLastName();
  const [radioInput] = useRadioInput();
  return (
    <div className="border p-2">
      <div className="w-full flex flex-row justify-end align-end">
        <RenderCounter />
      </div>
      <h3>Firstname: {firstName}</h3>
      <h3>Lastname: {lastName}</h3>
      <h3>Selection: {radioInput}</h3>
    </div>
  );
}
