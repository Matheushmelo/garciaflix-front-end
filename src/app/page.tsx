import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import getNewestCourses, {CourseType} from "@/services/courseService";
import Footer from "@/components/common/footer";

export default async function HomeNoAuth() {
  const courses: CourseType[] = await getNewestCourses();

  return (
    <>
      <Head>
        <title>Garciaflix</title>
      </Head>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={courses}/>
        <Footer />
       </main>
    </>
  )
}