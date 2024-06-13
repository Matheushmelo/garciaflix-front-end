import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";
import PresentationSection from "@/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";

const HomeNoAuth = () => {
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
        <CardsSection></CardsSection>
       </main>
    </>
  )
}

export default HomeNoAuth