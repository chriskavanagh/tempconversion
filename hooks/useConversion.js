import { useState, useEffect, useContext } from "react";
import { ConvertCxt } from "../context/ConverterContext";

export default function useConversion(fa, ce) {
  const [total, setTotal] = useState(0);
  const [ftotal, setFtotal] = useState(0);

  function toCelsius(f) {
    const x = f - 32;
    const d = 5 / 9;
    const y = x * d;
    setTotal(y);
  }

  function toFahrenheit(c) {
    const x = (c * 9) / 5;
    const y = x + 32;
    setFtotal(y);
  }

  useEffect(() => {
    toCelsius(fa);
  }, [fa]);

  useEffect(() => {
    toFahrenheit(ce);
  }, [ce]);
  return [total, ftotal];
}
