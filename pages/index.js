import Head from "next/head";
import { useContext } from "react";
import styles from "../styles/Home.module.css";
import useConversion from "../hooks/useConversion";
import CelsiusInput from "../components/CelsiusInput";
import { ConvertCxt } from "../context/ConverterContext";
import FarenheitInput from "../components/FarenheitInput";

export default function Home() {
  const { farenheit, celsius, name } = useContext(ConvertCxt);

  // temp conversion hook
  const [total, ftotal] = useConversion(farenheit.temp, celsius.temp);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by ceate next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1 className={styles.top}>Temperature Converter by {name}</h1>
      </section>
      <main className={styles.main}>
        <div className={styles.left}>
          <FarenheitInput />
        </div>
        <div className={styles.right}>
          <CelsiusInput />
        </div>
        <div className={total > 0 ? styles.totalLeftPos : styles.totalLeft}>
          {total.toFixed(1)} Celsius
        </div>
        <div className={ftotal > 0 ? styles.totalRightPos : styles.totalRight}>
          {ftotal.toFixed(1)} Farenheit
        </div>
      </main>
    </div>
  );
}
