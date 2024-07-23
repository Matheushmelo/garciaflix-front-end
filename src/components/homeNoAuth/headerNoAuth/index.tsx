'use client'
import { Button, Container } from "reactstrap"
import styles from "./styles.module.scss"
import Link from "next/link"

const HeaderNoAuth = () => {
  return (
    <>
      <Container className={styles.nav}>
        <img src="/logoGarciaflix.svg" alt="logoGarciaflix" className={styles.imgLogoNav}/>
        <div>
          <Link href="/login">
            <Button className={styles.navBtn} outline>
              Entrar
            </Button>
          </Link>
          <Link href="/register">
            <Button className={styles.navBtn} outline>
              Quero fazer parte
            </Button>
          </Link>
        </div>
      </Container>
    </>
  ) 
  
}

export default HeaderNoAuth