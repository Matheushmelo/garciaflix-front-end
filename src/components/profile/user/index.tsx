import { Button, Form, FormGroup, Input, Label } from "reactstrap"
import styles from "../../../styles/profile.module.scss"

const UserForm = function() {
  return (
    <>
      <Form className={styles.form}>
        <div className={styles.formName}>
          <p className={styles.nameAbbreviation}>NT</p>
          <p className={styles.userName}>NAME TEST</p>
        </div>
        <div className={styles.memberTime}>
          <img src="/profile/iconUserAccount.svg" alt="iconProfile" className={styles.memberTimeImg}/>
          <p className={styles.memberText}>Membro desde <br /> 20 de Abril de 2020</p>
        </div>
        <hr />
        <div className={styles.inputFlexDiv}>
          <FormGroup>
          <Label for="firstName" className={styles.label}>
            NOME
          </Label>
          <Input 
            name="firstName"
            type="text"
            id="firstName"
            placeholder="Qual o seu primeiro nome?"
            required
            maxLength={20}
            className={styles.inputFlex}
            value={"NAME"}
          />
          </FormGroup>
          <FormGroup>
          <Label for="lastName" className={styles.label}>
            SOBRENOME
          </Label>
          <Input 
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Qual o seu último nome?"
            required
            maxLength={20}
            className={styles.inputFlex}
            value={"TEST"}
          />
          </FormGroup>
        </div>
        <div className={styles.inputNormalDiv}>
        <FormGroup>
          <Label for="phone" className={styles.label}>
            WHATSAPP / TELEGRAM
          </Label>
          <Input 
            name="phone"
            type="tel"
            id="phone"
            placeholder="(xx) 9 xxxx-xxxx"
            required
            className={styles.input}
            value={"+55 (62) 9 9999-9999"}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email" className={styles.label}>
            E-MAIL
          </Label>
          <Input 
            name="email"
            type="email"
            id="email"
            placeholder="Digite o seu email"
            required
            className={styles.input}
            value={"nametest@email.com"}
          />
        </FormGroup>
        <Button className={styles.formBtn} outline type="submit">
          Salvar Alterações
        </Button>
        </div>
      </Form>
    </>
  )
}

export default UserForm