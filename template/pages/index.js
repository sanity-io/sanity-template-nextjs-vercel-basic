import Head from 'next/head'
import styles from '../styles/Home.module.css'
import JSONPretty from 'react-json-pretty';

import {getClient} from '../utils/sanity'

  export async function getStaticProps() {
    const data = await getClient(true).fetch(`*[]`);

  
    return {
      props: {
       data: {data}
      },
    }
  }

export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> with <a href="https://sanity.io">Sanity.io Data</a>
        </h1>
        <br />
        <JSONPretty style={{maxWidth: "100ch", overflowX: "scroll", boxShadow: "0 0 5px rgba(0,0,0,.3"}} id="json-pretty" data={data}></JSONPretty>


        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <p className={styles.description}>
          Or modify your data API with <a href="/studio/">Sanity Studio</a>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Next.js Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://sanity.io/docs" className={styles.card}>
            <h3>Sanity.io Documentation</h3>
            <p>Learn more about setting up Sanity Studio</p>
          </a>

        </div>

      </main>

    </div>
  )
}
