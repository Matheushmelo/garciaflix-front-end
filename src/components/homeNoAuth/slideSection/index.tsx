'use client'

import { CourseType } from "@/services/courseService"
import styles from "./styles.module.scss"
import { Button, Container } from "reactstrap"
import SlideComponent from "@/components/common/slideComponent"
import Link from "next/link"

interface props {
  newestCourses: CourseType[]
}

const SlideSection = function({ newestCourses }: props) {
  return (
    <>
	    <Container fluid>
		    <p className={styles.sectionTitle}>AULAS JÁ DISPONÍVEIS</p>
		    <SlideComponent course={newestCourses} />
		    <Link href="/register">
			    <Button outline color="light" className={styles.slideSectionBtn}>Se cadastre para acessar!</Button>
		    </Link>
	    </Container>
    </>
  )
}

export default SlideSection