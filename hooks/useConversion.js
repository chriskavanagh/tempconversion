import { useState, useEffect } from "react";

export default function useConversion(fa, ce) {
  const [total, setTotal] = useState(0);
  const [ftotal, setFtotal] = useState(0);

  /* const { farenheit, celsius } = useContext(ConvertCxt);
  console.log(farenheit); */

  //const { temp } = props.farenheit;

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
