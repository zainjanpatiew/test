import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Zain Page</title>
      </Head>
      <h1>Zain Page</h1>
      <p>
        Sample page for zain
      </p>
      <Link href="/about">About</Link>
    </>
  )
}