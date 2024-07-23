import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Footer = function () {
  return (
    <>
      <Container className={styles.footer}>
        <img src="/logoGarciaflix.svg" alt="lofoFooter" className={styles.footerLogo}/>
        <p className={styles.copy}>Garciaflix &copy; 2024-2024 All rights reserved.</p>
        <div className={styles.footerRefs}>
          <a href="https://www.linkedin.com/in/matheushmelo/" target={"blank"} className={styles.footerLink}>LINKEDIN</a>
          <a href="https://github.com/Matheushmelo" target={"blank"} className={styles.footerLink}>GITHUB</a>
        </div>
      </Container>
    </>
  )
}

export default Footer;