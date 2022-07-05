import create from "zustand";
import shallow from "zustand/shallow";

const useStore = create((set) => ({
  firstName: "",
  lastName: "",
  radioInput: "",
  setFirstName: (txt) => set((state) => ({ firstName: txt })),
  setLastName: (txt) => set((state) => ({ lastName: txt })),
  setRadioInput: (txt) => set((state) => ({ radioInput: txt })),
}));

export const useFirstName = () => {
  return useStore(
    (state) => ({
      firstName: state.firstName,
      setFirstName: state.setFirstName,
    }),
    shallow
  );
};

export const useLastName = () => {
  return useStore(
    (state) => ({
      lastName: state.lastName,
      setLastName: state.setLastName,
    }),
    shallow
  );
};

export const useRadioInput = () => {
  return useStore(
    (state) => ({
      radioInput: state.radioInput,
      setRadioInput: state.setRadioInput,
    }),
    shallow
  );
};
