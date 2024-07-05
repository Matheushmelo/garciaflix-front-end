'use client'

import HeaderAuth from "@/components/common/headerAuth"
import Head from "next/head"

const Home = function() {
  return (
    <>
      <Head>
        <title>Garciaflix - Login</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
      </main>
    </>
  )
}

export default Home