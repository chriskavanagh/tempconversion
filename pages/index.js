import Head from "next/head";
import { useState, useContext } from "react";
import styles from "../styles/Home.module.css";
import useConversion from "../hooks/useConversion";
import CelsiusInput from "../components/CelsiusInput";
import { ConvertCxt } from "../context/ConverterContext";
import FarenheitInput from "../components/FarenheitInput";

export default function Home() {
  const { customer } = useContext(ConvertCxt);

  // temp state
  const [farenheit, setFarenheit] = useState({
    temp: 0,
    scale: "f",
  });
  const [celsius, setCelsius] = useState({
    temp: 0,
    scale: "c",
  });

  // temp conversion hook
  const [total, ftotal] = useConversion(farenheit.temp, celsius.temp);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 style={{ color: "brown" }}>Temperature Converter by {customer}</h1>
      </section>
      <main className={styles.main}>
        <div className={styles.left}>
          <FarenheitInput farenheit={farenheit} setFarenheit={setFarenheit} />
        </div>
        <div className={styles.right}>
          <CelsiusInput celsius={celsius} setCelsius={setCelsius} />
        </div>
        <div className={styles.totalLeft}>{total.toFixed(1)} Celsius</div>
        <div className={styles.totalRight}>{ftotal.toFixed(1)} Farenheit</div>
      </main>
    </div>
  );
}
