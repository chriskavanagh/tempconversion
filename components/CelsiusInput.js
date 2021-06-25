import { useContext } from "react";
import { ConvertCxt } from "../context/ConverterContext";

export default function CelsiusInput(props) {
  const [, , celsius, setCelsius] = useContext(ConvertCxt);
  /* const updateField = (e) => {
    props.setCelsius({
      ...props.celsius,
      [e.target.name]: e.target.value,
    });
  }; */

  const updateField = (e) => {
    setCelsius({
      ...celsius,
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
        value={celsius.temp}
        onChange={updateField}
        style={{ borderBottomWidth: "0px", appearance: "textfield" }}
      />
    </div>
  );
}
