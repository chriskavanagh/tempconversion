import React, { createContext } from "react";

export const ConvertCxt = createContext(null);

export const CxtProvider = ({ children }) => {
  const customer = "Chris";

  return (
    <ConvertCxt.Provider value={{ customer }}>{children}</ConvertCxt.Provider>
  );
};
