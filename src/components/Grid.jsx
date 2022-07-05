import React from "react";
import { RenderCounter, Input, Radio } from "./";

export function Grid({ firstname, lastname, radioinput }) {
  return (
    <div className="mt-5 flex p-2 border">
      <RenderCounter />
      <div className="mt-4 flex flex-col justify-center items-center sm:grid grid-cols-2 p-2 w-full justify-items-center">
        <FirstNameInput
          firstName={firstname.firstName}
          setFirstName={firstname.setFirstName}
        />
        <LastNameInput
          lastName={lastname.lastName}
          setLastName={lastname.setLastName}
        />
        <RadioInput
          radioInput={radioinput.radioInput}
          setRadioInput={radioinput.setRadioInput}
        />
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
function FirstNameInput({ firstName, setFirstName }) {
  return (
    <div className="w-64 border m-4 p-2">
      <Input value={firstName} setValue={setFirstName} name={"Firstname"} />
    </div>
  );
}

function LastNameInput({ lastName, setLastName }) {
  return (
    <div className="w-64 border m-4 p-2">
      <Input value={lastName} setValue={setLastName} name={"Lastname"} />
    </div>
  );
}

function RadioInput({ radioInput, setRadioInput }) {
  return (
    <div className="w-64 border p-2">
      <Radio value={radioInput} setValue={setRadioInput} />
    </div>
  );
}