import { proxy, useSnapshot } from "valtio";


const state = proxy({
  firstName : "",
  lastName : "",
  radioInput : ""
});

export function useStore() {
  return useSnapshot(state);
}

export const useFirstName = () => {
  const { firstName } =  useStore();

  return { setFirstName: (val) => state.firstName = val, firstName };
};

export const useLastName = () => {
  const { lastName } =  useStore();

  return { setLastName: (val) => state.lastName = val, lastName };
}

export const useRadioInput = () => {
  const { radioInput } =  useStore();

  return { setRadioInput: (val) => state.radioInput = val, radioInput };
}