import React from "react";
import { firstNameContext, lastNameContext, radioInputContext } from "../";

export const useFirstName = () => {
  const { firstName, setFirstName } = React.useContext(firstNameContext);
  return { firstName, setFirstName };
};

export const useLastName = () => {
  const { lastName, setLastName } = React.useContext(lastNameContext);
  return { lastName, setLastName };
};

export const useRadioInput = () => {
  const { radioInput, setRadioInput } = React.useContext(radioInputContext);
  return { radioInput, setRadioInput };
};
