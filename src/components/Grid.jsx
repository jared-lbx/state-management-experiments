import React from "react";
import { useLastName, useFirstName, useRadioInput } from "../contexts/hooks";
import { RenderCounter, Input, Radio } from "./";

export function Grid() {
  return (
    <div className="mt-5 flex p-2 border">
      <RenderCounter />
      <div className="mt-4 flex flex-col justify-center items-center sm:grid grid-cols-2 p-2 w-full justify-items-center">
        <FirstNameInput />
        <LastNameInput />
        <RadioInput />
      </div>
    </div>
  );
}

/*
 move hooks & inputs from Grid to their own components
 prevents Grid from re-rendering
 was:
 ```
     const {firstName, setFirstName} = useFirstName()
     const {lastName, setLastName} = useLastName()
     const {radioInput, setRadioInput} = useRadioInput()
     return (
       // drill those into <Input>/<Radio>
     )
 ```

  this caused Grid to re-render a bunch
  kinda hacky - subclassing for specialization is a no-no
  still, solves re-render problem 
*/
function FirstNameInput() {
  const { firstName, setFirstName } = useFirstName();
  return (
    <div className="w-64 border m-4 p-2">
      <Input value={firstName} setValue={setFirstName} name={"Firstname"} />
    </div>
  );
}

function LastNameInput() {
  const { lastName, setLastName } = useLastName();
  return (
    <div className="w-64 border m-4 p-2">
      <Input value={lastName} setValue={setLastName} name={"Lastname"} />
    </div>
  );
}

function RadioInput() {
  const { radioInput, setRadioInput } = useRadioInput();
  return (
    <div className="w-64 border p-2">
      <Radio value={radioInput} setValue={setRadioInput} />
    </div>
  );
}
