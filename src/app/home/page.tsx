'use client'

import FavoriteCategory from "@/components/homeAuth/favoriteCategory"
import FeaturedSection from "@/components/homeAuth/featuredSection"
import NewestCategory from "@/components/homeAuth/newestCategory"
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
        <NewestCategory />
        <FavoriteCategory />
      </main>
    </>
  )
}

export default Home