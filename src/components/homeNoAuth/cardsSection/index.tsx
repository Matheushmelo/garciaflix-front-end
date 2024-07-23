import { Container } from "reactstrap";
import styles from "./styles.module.scss"

const CardsSection = () => {
  return (
    <>
      <p className={styles.sectionTitle}>O QUE VOCÊ VAI ACESSAR</p>
      <Container className="d-flex flex-wrap justify-content-center gap-4 pb-5">
        <div className={styles.card1}>
          <p className={styles.cardTitle}>FRONT-END</p>
          <p className={styles.cardDescription}>
            Com nossos cursos de front-end você irá se tornar um expert em desenvolver UI's responsivas e utilizando
            os melhores frameworks e libs do mercado.
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>BACK-END</p>
          <p className={styles.cardDescription}>
            Aprenda de uma vez por todas a dominar tercnologias back-enb como, banco de dados relacionais e não relacionais,
            API, NodeJS, entre muitas outras tecnologias que te deixarão a frente no mercado.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>MOBILE</p>
          <p className={styles.cardDescription}>
            Desenvolvimento mobile vêm crescendo cada vez mais, pois hoje, o mundo cabe na palma da mão. Então não fique de
            fora e aprenda já as tecnologias mais avançadas em desenvolvimento mobile.
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>GIT E GITHUB</p>
          <p className={styles.cardDescription}>
            Saber versionar seus códigos e contribuir com um time de desenvolvimento, são habilidades importantes para um DEV.
            Com nosso curso de Git e GitHub você irá apreder do zero ao avançado.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>BLOCKCHAIN</p>
          <p className={styles.cardDescription}>
            A Web3 está crescendo cada vez mais, e hoje podemos dizer que já é a nova 'Internet', e você precisa dominar as
            principais tecnologias de desenvolvimento de smart contratcts.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>CARREIRAS</p>
          <p className={styles.cardDescription}>
            O curso de carreiras é focado em desenvolver soft-skills importantes para todos os desenvolvedores, seja ele
            de qual stack for.
          </p>
        </div>
      </Container>
    </>
  )
}

export default CardsSection