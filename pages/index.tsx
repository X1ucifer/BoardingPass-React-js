import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import QrCode from "../components/QrCode"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Boarding Pass</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <QrCode/> */}
      <img src="qr.jpeg"></img>

    </div>
  )
}

export default Home
