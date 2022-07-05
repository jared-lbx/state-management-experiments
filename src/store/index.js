import { atom, useAtom } from "jotai";

const firstNameAtom = atom("");
const lastNameAtom = atom("");
const radioInputAtom = atom("");

export const useFirstName = () => {
  return useAtom(firstNameAtom);
};
export const useLastName = () => {
  return useAtom(lastNameAtom);
};
export const useRadioInput = () => {
  return useAtom(radioInputAtom);
};
