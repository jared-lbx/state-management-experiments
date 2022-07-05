import React from "react";
import { RenderCounter } from "./";

export function Summary({ firstname, lastname, radioinput }) {
  return (
    <div className="border p-2">
      <div className="w-full flex flex-row justify-end align-end">
        <RenderCounter />
      </div>
      <h3>Firstname: {firstname.firstName}</h3>
      <h3>Lastname: {lastname.lastName}</h3>
      <h3>Selection: {radioinput.radioInput}</h3>
    </div>
  );
}
