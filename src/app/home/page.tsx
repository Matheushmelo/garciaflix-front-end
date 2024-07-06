'use client'

import FeaturedSection from "@/components/homeAuth/featuredSection"
import Head from "next/head"

const Home = function() {
  return (
    <>
      <Head>
        <title>Garciaflix - Login</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
      </main>
    </>
  )
}

export default Home