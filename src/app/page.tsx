import Head from "next/head";
import styles from "../styles/HomeNoAuth.module.scss"
import HeaderNoAuth from "@/components/homeNoAuth/headerNoAuth";

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Garciaflix</title>
      </Head>
      <body>
        <main>
          <HeaderNoAuth></HeaderNoAuth>
        </main>
      </body>
    </>
  )
}

export default HomeNoAuth