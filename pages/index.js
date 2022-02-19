import Link from "next/link"
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum, minus rerum sunt soluta iusto asperiores illum aliquam quos, assumenda at, quae repellat modi molestiae in odit porro illo reprehenderit.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum maiores molestiae, assumenda omnis quidem, distinctio dolores repellat ipsam at quam necessitatibus optio veniam eveniet sequi incidunt ea quo. Tempora.</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
