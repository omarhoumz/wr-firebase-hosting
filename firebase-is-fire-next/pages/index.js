import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hosting a Next app using Firebase Hosting | Omar Houmz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.h1}>Firebase Hosting is 🔥</h1>

        <a
          className={styles.link}
          href="https://omarhoumz.com/blog/firebase-hosting/"
        >
          Check the source
        </a>
      </main>
    </div>
  )
}
