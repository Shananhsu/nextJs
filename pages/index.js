import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shananhsu Learn | Next.js</title>
        <meta name="keywords" content="Shananhsu"/>
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.title}>
          關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我
        </p>
        <p className={styles.title}>
          關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我關於我
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
