import React, { useState, useEffect } from "react";
import styles from "../styles/Conversion.module.css";

export default function Conversion(props) {
  const [total, setTotal] = useState(0);
  const [ftotal, setFtotal] = useState(0);

  //const { temp } = props.farenheit;

  function toCelsius(f) {
    const x = f - 32;
    const y = x * 0.5;
    setTotal(y);
  }

  function toFahrenheit(c) {
    const x = (c * 9) / 5;
    const y = x + 32;
    setFtotal(y);
  }

  useEffect(() => {
    toCelsius(props.farenheit.temp);
  }, [props.farenheit.temp]);

  useEffect(() => {
    toFahrenheit(props.celsius.temp);
  }, [props.celsius.temp]);
  return (
    <div>
      <h3>Celsius Temperature is: {total}</h3>
      <h3>Farenheit Temperature is: {ftotal}</h3>
    </div>
  );
}
