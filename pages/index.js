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
        <h1 className={styles.title}>小型Demo</h1>
        <p className={styles.title}>
          Demo所使用的前端技能
        </p>
        <p className={styles.title}>
          React.js
        </p>
        <p className={styles.title}>
          Next.js
        </p>
        <p className={styles.title}>
          css.module
        </p>
        <p className={styles.title}>
          Node.js/async/await
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
