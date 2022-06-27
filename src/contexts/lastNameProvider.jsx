import React from "react";

export const lastNameContext = React.createContext();
export function LastNameProvider({ children }) {
  const [lastName, setLastName] = React.useState("");
  return (
    <lastNameContext.Provider value={{ lastName, setLastName }}>
      {children}
    </lastNameContext.Provider>
  );
}
