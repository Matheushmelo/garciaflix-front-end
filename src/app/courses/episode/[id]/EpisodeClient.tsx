'use client'

import styles from "../../../../styles/episodePlayer.module.scss"
import HeaderGeneric from "@/components/common/headerGeneric"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import courseService, { CourseType } from "@/services/courseService"
import PageSpinner from "@/components/common/spinner"
import { Button, Container } from "reactstrap"
import ReactPlayer from "react-player"
import watchEpidoseService from "@/services/episodeService"

interface Props {
  params: {id: string};
  setDynamicTitle: (title: string) => void
}

const EpisodePlayer = function({params, setDynamicTitle}: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [loading, setLoading] = useState(true)
  const [course, setCourse] = useState<CourseType>()
  const [getEpisodeTime, setGetEpisodeTime] = useState(0)
  const [episodeTime, setEpisodeTime] = useState(0)
  const [isReady, setIsReady] = useState(false)

  const episodeOrder = parseFloat(params.id?.toString() || "")
  const courseId = searchParams.get('courseid')?.toString() || ""
  const episodeId = parseFloat(searchParams.get('episodeid')?.toString() || "")

  const playerRef = useRef<ReactPlayer>(null)

  useEffect(() => {
    if(!sessionStorage.getItem("garciaflix-token")) {
      router.push("/login")
    } else {
      setLoading(false)
    }
  }, [])

  const handleGetEpisodeTime = async() => {
    const res = await watchEpidoseService.getWatchTime(episodeId)

    if(res.data !== null) {
      setGetEpisodeTime(res.data.seconds)
    }
  }

  useEffect (() => {
    handleGetEpisodeTime()
  }, [router])

  const handleSetEpisodeTime = async() => {
    const res = await watchEpidoseService.setWatchTime({
      episodeId: episodeId,
      seconds: Math.round(episodeTime)
    })

    if(res.data !== null) {
      setGetEpisodeTime(res.data.seconds)
    }
  }

  useEffect (() => {
    handleGetEpisodeTime()
  }, [router])

  const handlePlayerTime = () => {
    playerRef.current?.seekTo(getEpisodeTime)
    setIsReady(true)
  }

  if(isReady === true) {
    setTimeout(() => {
      handleSetEpisodeTime()
    }, 1000 * 3)
  }

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

      setDynamicTitle(`${courseData.episodes[episodeOrder].name}`);
    }
  }

  const handleLastEpisode = () => {
    router.push(`/courses/episode/${episodeOrder - 1}?courseid=${course?.id}&episodeid=${episodeId - 1}`)
  }

  const handleNextEpisode = () => {
    router.push(`/courses/episode/${episodeOrder + 1}?courseid=${course?.id}&episodeid=${episodeId + 1}`)
  }

  useEffect(() => {
    getCourse()
  }, [courseId])

  if(course?.episodes === undefined) return <PageSpinner/>

  if(episodeOrder + 1 < course?.episodes?.length) {
    if(Math.round(episodeTime) === course.episodes[episodeOrder].secondsLong) {
      handleNextEpisode()
    }
  }

  const videoUrl = `${process.env.NEXT_PUBLIC_BASEURL}/episodes/stream?videoUrl=${course.episodes[episodeOrder].videoUrl}&token=${sessionStorage.getItem("garciaflix-token")}`

  if(loading) return <PageSpinner />

  return (
    <>
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
              ref={playerRef}
              onStart={handlePlayerTime}
              onProgress={(progress) => {
                setEpisodeTime(progress.playedSeconds)
              }}
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