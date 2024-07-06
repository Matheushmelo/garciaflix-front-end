import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import courseService, {CourseType} from "@/services/courseService";
import Footer from "@/components/common/footer";
import AOSinit from "@/components/homeNoAuth/aosInit";

export default async function HomeNoAuth() {
  const courses: CourseType[] = await courseService.getNewestCourses();

  return (
    <>
      <Head>
        <title>Garciaflix</title>
      </Head>
      <main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={courses}/>
        </div>
        <Footer />
       </main>
      <AOSinit /> 
    </>
  )
}