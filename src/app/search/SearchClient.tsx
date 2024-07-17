'use client'

import styles from "../../styles/search.module.scss"
import HeaderAuth from "@/components/common/headerAuth"
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import { Container } from "reactstrap";
import SearchCard from "@/components/searchCard";
import Footer from "@/components/common/footer";
import PageSpinner from "@/components/common/spinner";

interface LoginClientProps {
  setDynamicTitle: (title: string) => void;
}

const Search = function({ setDynamicTitle }: LoginClientProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchName = searchParams.get('name')
  const [searchResult, setSearchResult] = useState<CourseType[]>([])
  const [loading, setLoading] = useState(true)

  const searchCourses = async function() {
    if(searchName && typeof searchName === "string") {
      const res = await courseService.getSearch(searchName)

      setSearchResult(res.data.courses)
    }
  }

  useEffect(() => {
    searchCourses()
    setDynamicTitle(`Garciaflix - ${searchName}`);
  }, [searchName])

  useEffect(() => {
    if(!sessionStorage.getItem("garciaflix-token")) {
      router.push("/login")
    } else {
      setLoading(false)
    }
  }, [])

  if(loading) return <PageSpinner />

  return(
    <>
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