import React from "react";

export default function CelsiusInput(props) {
  const updateField = (e) => {
    props.setCelsius({
      ...props.celsius,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <p>To Farenheit</p>
      <input
        type="number"
        id="celsius"
        name="temp"
        value={props.celsius.temp}
        onChange={updateField}
      />
    </div>
  );
}
