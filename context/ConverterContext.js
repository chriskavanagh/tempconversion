import { createContext, useState } from "react";

export const ConvertCxt = createContext();

export const CxtProvider = ({ children }) => {
  const [farenheit, setFarenheit] = useState({
    temp: 0,
    scale: "f",
  });
  const [celsius, setCelsius] = useState({
    temp: 0,
    scale: "c",
  });

  const [name, setName] = useState("Chris");

  return (
    <ConvertCxt.Provider
      value={{ farenheit, setFarenheit, celsius, setCelsius, name, setName }}
    >
      {children}
    </ConvertCxt.Provider>
  );
};

export default CxtProvider;
