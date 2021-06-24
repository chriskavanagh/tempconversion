import { useContext } from "react";
import { ConvertCxt } from "../../context/ConverterContext";

export default function index() {
  const [farenheit, setFarenheit, celius, setCelsius] = useContext(ConvertCxt);
  console.log(farenheit);
  return (
    <div>
      <h1>About Us</h1>
      <h3>I am the total</h3>
    </div>
  );
}
