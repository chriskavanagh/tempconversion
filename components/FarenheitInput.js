import React from "react";

export default function FarenheitInput(props) {
  const updateField = (e) => {
    props.setFarenheit({
      ...props.farenheit,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <p>To Celsius</p>
      <input
        type="number"
        id="farenheit"
        name="temp"
        value={props.farenheit.temp}
        onChange={updateField}
      />
    </div>
  );
}
