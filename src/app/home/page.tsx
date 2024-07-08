'use client'

import Footer from "@/components/common/footer"
import FavoriteCategory from "@/components/homeAuth/favoriteCategory"
import FeaturedCategory from "@/components/homeAuth/featuredCategory"
import FeaturedSection from "@/components/homeAuth/featuredSection"
import ListCategories from "@/components/homeAuth/listCategories"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"

const Home = function() {
  return (
    <>
      <Head>
        <title>Garciaflix - Home</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main>
        <FeaturedSection />
        <NewestCategory />
        <FavoriteCategory />
        <FeaturedCategory />
        <ListCategories />
        <Footer />
      </main>
    </>
  )
}

export default Home