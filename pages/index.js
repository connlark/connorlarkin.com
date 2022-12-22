import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Spacer } from '@nextui-org/react';



const GH = () => <Button>github</Button>;
const TWTR = () => <Button>twitter</Button>;




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>connorlarkin dot com</title>
        <meta name="description" content="connorlarkin.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>
          connorlarkin.com
      </h2>
      <Spacer/>
      <Spacer/>

      <Button.Group size="xl" vertical color="secondary" bordered>

        <Button onClick={() => {window.location.replace('https://github.com/connlark')}}>github</Button>

        <Button onClick={() => {window.location.replace('https://twitter.com/connlark')}}>twitter</Button>
        <Button onClick={() => {window.location.replace('https://instagram.com/connlark')}}>instagram</Button>

        <Button onClick={() => {window.location.replace('https://bitbybite.xyz')}}>bitbybite.xyz</Button>
        
      </Button.Group>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://connorlarkin.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          connorlarkin.com © 2022
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
