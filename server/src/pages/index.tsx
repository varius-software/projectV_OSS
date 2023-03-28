import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import styled from '../styles/home.module.sass'
//import Returnstatus from "@/status/store";
import CreateAccount from "@/pages/account";
import {useEffect} from "react";

export default function Home() {
    const Devmode = () => {
            if (process.env.NODE_ENV === "development") {
                return (
                    <p> development mode </p>
                )
            } else {
                return (
                    <p> development mode </p>
                )
            }
        }
  return (
    <div className={styled.container}>
        <Head>
            <title>V</title>
        </Head>
      <main className={styles.main}>
              <Image
                src="/image_4.png"
                alt= "Logo"
                className={styles.vercelLogo}
                width={896}
                height={345}
                priority
              />
			<p>insert code is : {'  {process.env.NODE_ENV}'}.</p>
			<p>How to insert code is edit index.tsx</p>
          <CreateAccount />
          <Devmode/>
      </main>
    </div>
  )
}
