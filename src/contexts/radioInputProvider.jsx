import React from "react";

export const radioInputContext = React.createContext();
export function RadioInputProvider({ children }) {
  const [radioInput, setRadioInput] = React.useState("");
  return (
    <radioInputContext.Provider value={{ radioInput, setRadioInput }}>
      {children}
    </radioInputContext.Provider>
  );
}
