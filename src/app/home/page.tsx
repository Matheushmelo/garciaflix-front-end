'use client'

import Footer from "@/components/common/footer"
import PageSpinner from "@/components/common/spinner"
import FavoriteCategory from "@/components/homeAuth/favoriteCategory"
import FeaturedCategory from "@/components/homeAuth/featuredCategory"
import FeaturedSection from "@/components/homeAuth/featuredSection"
import ListCategories from "@/components/homeAuth/listCategories"
import NewestCategory from "@/components/homeAuth/newestCategory"
import Head from "next/head"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Home = function() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!sessionStorage.getItem("garciaflix-token")) {
      router.push("/login")
    } else {
      setLoading(false)
    }
  }, [])

  if(loading) return <PageSpinner />

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