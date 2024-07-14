'use client'

import Head from "next/head"
import styles from "../../../../styles/episodePlayer.module.scss"
import HeaderGeneric from "@/components/common/headerGeneric"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import courseService, { CourseType } from "@/services/courseService"
import PageSpinner from "@/components/common/spinner"
import { Button, Container } from "reactstrap"
import ReactPlayer from "react-player"

interface Props {
  params: {id: string}
}

const EpisodePlayer = function({params}: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [course, setCourse] = useState<CourseType>()

  const episodeOrder = parseFloat(params.id?.toString() || "")
  const courseId = searchParams.get('courseid')?.toString() || ""

  const getCourse = async function() {
    if(typeof courseId !== "string") return

    const res = await courseService.getEpisodes(courseId)

    if(res.status === 200) {
      const courseData = res.data
      if(courseData.Episodes) {
        courseData.episodes = courseData.Episodes
        delete courseData.Episodes
      }
      setCourse(res.data)
    }
  }

  const handleLastEpisode = () => {
    router.push(`/courses/episode/${episodeOrder - 1}?courseid=${course?.id}`)
  }

  const handleNextEpisode = () => {
    router.push(`/courses/episode/${episodeOrder + 1}?courseid=${course?.id}`)
  }

  useEffect(() => {
    getCourse()
  }, [courseId])

  if(course?.episodes === undefined) return <PageSpinner/>

  const videoUrl = `${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl}&token=${sessionStorage.getItem("garciaflix-token")}`

  return (
    <>
      <Head>
        <title>Garciaflix - {course.episodes[episodeOrder].name}</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main>
        <HeaderGeneric logoUrl="/home" btnContent={'Voltar para o curso'} btnUrl={`/courses/${courseId}`}/>
        <Container className="d-flex flex-column align-items-center gap-3 pt-5">
          <p className={styles.episodeTitle}>
            {course.episodes[episodeOrder].name}
          </p>
          {typeof window === 'undefined' ? null : (
            <ReactPlayer 
              className={styles.player} 
              url={videoUrl} 
              controls
            />
          )}
          <div className={styles.episodeButtonDiv}>
            <Button 
              className={styles.episodeButton} 
              disabled={episodeOrder === 0 ? true : false}
              onClick={handleLastEpisode}
            >
              <img src="/episode/iconArrowLeft.svg" alt="arrowLeft" className={styles.arrowImg}/>
            </Button>
            <Button 
              className={styles.episodeButton} 
              disabled={episodeOrder + 1 === course.episodes.length ? true : false}
              onClick={handleNextEpisode}
              >
              <img src="/episode/iconArrowRight.svg" alt="arrowright" className={styles.arrowImg}/>
            </Button>
          </div>
          <p className="text-center py-4">
            {course.episodes[episodeOrder].synopsis}
          </p>
        </Container>
      </main>
    </>
  )
}

export default EpisodePlayer