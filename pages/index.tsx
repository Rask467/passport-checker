import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {PassportReader} from '@gitcoinco/passport-sdk-reader'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

const reader = new PassportReader('https://ceramic-clay.3boxlabs.com', '1');

const Home: NextPage = () => {
  const [address, setAddress] = useState('')
  const { data } = useAccount()
  
  useEffect(() => {
    if (data && data.address !== undefined) {
      setAddress(data.address)
    }
  }, [])

  useEffect(() => {
    async function a () {
      console.log('address: ', address)
      const passport = await reader.getPassport(address);
      console.log('passport: ', passport)
    }
    if(address !== '' && address !== undefined) {
      a()
    }
  }, [address])

  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to PassportChecker!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://rainbow.me" target="_blank" rel="noopener noreferrer">
          Made with ❤️ by your frens at 🌈
        </a>
      </footer>
    </div>
  );
};

export default Home;
