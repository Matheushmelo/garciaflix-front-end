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
            O GarciaFlix é o lugar onde você irá evoluir suas habilidades como programador. Para isso. você terá
            acesso à diversos cursos de tecnologia, mentorias semanais, atualizações de tecnologias, além de todo 
            suporte necessário para que sua experiência conosco, seja a MELHOR possível.
          </p>
        </div>
        <div className={styles.card2}>
          <p className={styles.cardTitle}>BACK-END</p>
          <p className={styles.cardDescription}>
            O GarciaFlix é o lugar onde você irá evoluir suas habilidades como programador. Para isso. você terá
            acesso à diversos cursos de tecnologia, mentorias semanais, atualizações de tecnologias, além de todo 
            suporte necessário para que sua experiência conosco, seja a MELHOR possível.
          </p>
        </div>
        <div className={styles.card3}>
          <p className={styles.cardTitle}>MOBILE</p>
          <p className={styles.cardDescription}>
            O GarciaFlix é o lugar onde você irá evoluir suas habilidades como programador. Para isso. você terá
            acesso à diversos cursos de tecnologia, mentorias semanais, atualizações de tecnologias, além de todo 
            suporte necessário para que sua experiência conosco, seja a MELHOR possível.
          </p>
        </div>
        <div className={styles.card4}>
          <p className={styles.cardTitle}>GIT E GITHUB</p>
          <p className={styles.cardDescription}>
            O GarciaFlix é o lugar onde você irá evoluir suas habilidades como programador. Para isso. você terá
            acesso à diversos cursos de tecnologia, mentorias semanais, atualizações de tecnologias, além de todo 
            suporte necessário para que sua experiência conosco, seja a MELHOR possível.
          </p>
        </div>
        <div className={styles.card5}>
          <p className={styles.cardTitle}>BLOCKCHAIN</p>
          <p className={styles.cardDescription}>
            O GarciaFlix é o lugar onde você irá evoluir suas habilidades como programador. Para isso. você terá
            acesso à diversos cursos de tecnologia, mentorias semanais, atualizações de tecnologias, além de todo 
            suporte necessário para que sua experiência conosco, seja a MELHOR possível.
          </p>
        </div>
        <div className={styles.card6}>
          <p className={styles.cardTitle}>CARREIRAS</p>
          <p className={styles.cardDescription}>
            O GarciaFlix é o lugar onde você irá evoluir suas habilidades como programador. Para isso. você terá
            acesso à diversos cursos de tecnologia, mentorias semanais, atualizações de tecnologias, além de todo 
            suporte necessário para que sua experiência conosco, seja a MELHOR possível.
          </p>
        </div>
      </Container>
    </>
  )
}

export default CardsSection