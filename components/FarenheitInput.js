import { useContext } from "react";
import { ConvertCxt } from "../context/ConverterContext";

export default function FarenheitInput(props) {
  const { farenheit, setFarenheit } = useContext(ConvertCxt);
  /* const updateField = (e) => {
    props.setFarenheit({
      ...props.farenheit,
      [e.target.name]: e.target.value,
    });
  }; */

  const updateField = (e) => {
    setFarenheit({
      ...farenheit,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <p>To Celsius</p>
      <input
        className="input"
        type="number"
        id="farenheit"
        name="temp"
        value={farenheit.temp}
        onChange={updateField}
        style={{ borderBottomWidth: "0px", appearance: "textfield" }}
      />
    </div>
  );
}
