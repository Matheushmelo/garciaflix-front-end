'use client'

import Head from "next/head"
import styles from "../../styles/search.module.scss"
import HeaderAuth from "@/components/common/headerAuth"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import { Container } from "reactstrap";
import SearchCard from "@/components/searchCard";
import Footer from "@/components/common/footer";

const Search = function() {
  const searchParams = useSearchParams()
  const searchName = searchParams.get('name')
  const [searchResult, setSearchResult] = useState<CourseType[]>([])

  const searchCourses = async function() {
    if(searchName && typeof searchName === "string") {
      const res = await courseService.getSearch(searchName)

      setSearchResult(res.data.courses)
    }
  }

  useEffect(() => {
    searchCourses()
  }, [searchName])

  return(
    <>
      <Head>
        <title>Garciaflix - {searchName}</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <div className={styles.headerFooterBg}>
          <HeaderAuth />
        </div>
        {searchResult.length >= 1 ? (
          <div className={styles.searchResult}>
            <Container className="d-flex flex-wrap justify-content-center gap-5 py-5">
              {searchResult?.map((course) => (
                <SearchCard key={course.id} course={course}/>
              ))}
            </Container>
          </div>
        ) : (
          <p className={styles.noSearchResult}>Nenhum resultado encontrado</p>
        )}
      <div className={styles.headerFooterBg}>
        <Footer />
      </div>
      </main>
    </>
  )
}

export default Search