'use client'

import Head from "next/head"
import styles from "../../../styles/coursePage.module.scss"
import HeaderAuth from "@/components/common/headerAuth"
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import PageSpinner from "@/components/common/spinner";

interface Props {
  params: {id: string}
}

const CoursePage = function({params}: Props) {
  const [course, setCourse] = useState<CourseType>()

  const getCourse = async function() {
    if (typeof params.id !== "string") return

    const res = await courseService.getEpisodes(params.id)

    if(res.status === 200) {
      setCourse(res.data)
    }
  }

  useEffect(() => {
    getCourse()
  }, [params.id])

  return (
    <>
      <Head>
        <title>Garciaflix - {course?.name}</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main>
        <HeaderAuth />
        {course ? (
          <p>{course.name}</p>
        ) : (
          <PageSpinner />
        )}
      </main>
    </>
  )
}

export default CoursePage