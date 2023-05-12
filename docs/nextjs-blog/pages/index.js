import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Read</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to the new home of Next Read!
        </h1>

        <p className={styles.description}>
          Next Read has been converted to a Next.js app. <Link href="/changes">Check out the info page!</Link>
        </p>

        <div className={styles.grid}>
          <Link href="" className={styles.card}>
            <h3>About Next Read</h3>
            <p>Learn about the Next Read project and who's behind the scenes.</p>
          </Link>

          <Link href="" className={styles.card}>
            <h3>Contact us</h3>
            <p>Feel free to reach out from our socials or leave feedback!</p>
          </Link>
        </div>
      </main>

      <footer>
        <p>&copy; 2023 Rylan Turner. All rights reserved.</p>
      </footer>

      <style jsx>{`
        main {
          background-color: #F0BFB3;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #F0BFB3;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
