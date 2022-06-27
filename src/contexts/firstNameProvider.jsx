import React from "react";

export const firstNameContext = React.createContext();
export function FirstNameProvider({ children }) {
  const [firstName, setFirstName] = React.useState("");
  return (
    <firstNameContext.Provider value={{ firstName, setFirstName }}>
      {children}
    </firstNameContext.Provider>
  );
}
