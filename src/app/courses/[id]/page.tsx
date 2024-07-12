/* eslint-disable @next/next/no-img-element */
'use client'

import Head from "next/head"
import styles from "../../../styles/coursePage.module.scss"
import HeaderAuth from "@/components/common/headerAuth"
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import { Button, Container } from "reactstrap";
import PageSpinner from "@/components/common/spinner";
import EpisodeList from "@/components/episodeList";
import Footer from "@/components/common/footer";

interface Props {
  params: {id: string}
}

const CoursePage = function({params}: Props) {
  const [course, setCourse] = useState<CourseType>()
  const [liked, setLiked] = useState(false)
  const [favorited, setFavorited] = useState(false)

  const getCourse = async function() {
    if (typeof params.id !== "string") return

    const res = await courseService.getEpisodes(params.id)

    if(res.status === 200) {
      const courseData = res.data
      if(courseData.Episodes) {
        courseData.episodes = courseData.Episodes
        delete courseData.Episodes
      }

      setCourse(res.data)
      setLiked(res.data.liked)
      setFavorited(res.data.favorited)
    }
  }

  useEffect(() => {
    getCourse()
  }, [params.id])

  const handleLikeCourse = async () => {
    if(liked === true) {
      await courseService.removeLike(params.id)
      setLiked(false)
    } else {
      await courseService.like(params.id)
      setLiked(true)
    }
  }

  const handleFavCourse = async () => {
    if(favorited === true) {
      await courseService.removeFav(params.id)
      setFavorited(false)
    } else {
      await courseService.addToFav(params.id)
      setFavorited(true)
    }
  }

  if(course === undefined) return <PageSpinner />

  return (
    <>
      <Head>
        <title>Garciaflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main>
        <div style={{
          backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "550px"
        }}>
          <HeaderAuth />
        </div>
        <Container className={styles.courseInfo}>
          <p className={styles.courseTitle}>{course?.name}</p>
          <p className={styles.courseDescription}>{course?.synopsis}</p>
          <Button outline className={styles.courseBtn} disabled={course?.episodes?.length === 0 ? true : false}>
            ASSISTIR AGORA!
            <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg}/>
          </Button>
          <div className={styles.interactions}>
            {liked === false ? (
              <img 
                src="/course/iconLike.svg" 
                alt="likeImg" 
                className={styles.interactionsImg} 
                onClick={handleLikeCourse} 
              />
            ) : (
              <img 
                src="/course/iconLiked.svg" 
                alt="likeImg" 
                className={styles.interactionsImg}
                onClick={handleLikeCourse}
              />
            )}
            {favorited === false ? (
              <img 
                src="/course/iconAddFav.svg" 
                alt="likeImg" 
                className={styles.interactionsImg}
                onClick={handleFavCourse}
              />
            ) : (
              <img 
                src="/course/iconFavorited.svg" 
                alt="likeImg" 
                className={styles.interactionsImg}
                onClick={handleFavCourse}
              />
            )}
          </div>
        </Container>
        <Container className={styles.episodeInfo}>
          <p className={styles.episodeDivision}>EPISÓDIOS</p>
          <p className={styles.episodeLenght}>
            {course?.episodes?.length} episódios
          </p>
          {course?.episodes?.length === 0 ? (
            <p>
              <strong>Não temos episódios ainda, volte outra hora! &#x1F606;</strong>
            </p>
          ) : course?.episodes?.map((episode) => (
            <EpisodeList key={episode.id} episode={episode}/>
          ))}
        </Container>
        <Footer />
      </main>
    </>
  )
}

export default CoursePage



