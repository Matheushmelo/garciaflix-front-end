'use client'

import Head from "next/head";
import styles from "../../styles/registerLogin.module.scss";
import HeaderGeneric from "@/components/common/headerGeneric";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import Footer from "@/components/common/footer";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import ToastComponent from "@/components/common/toast";
import authService from "@/services/authService";

const Login = function() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [toastColor, setToastColor] = useState("")
  const [toastIsOpen, setToastIsOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState("")

  useEffect(() => {
    if(sessionStorage.getItem("garciaflix-token")) {
      router.push("/home")
    }
  }, [])

  useEffect(() => {
    const registerSucess = searchParams.get('registred')

    if(registerSucess === "true") {
      setToastColor("bg-success")

      setToastIsOpen(true)
      
      setTimeout(() => {
        setToastIsOpen(false)
      }, 1000 * 3)

      setToastMessage("Cadastro feito com sucesso!")
    }
  }, [searchParams])

  const handleLogin = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const email = formData.get("email")!.toString()
    const password = formData.get("password")!.toString()

    const params = {email, password}

    const { status } = await authService.login(params)

    if(status === 200) {
      router.push("/home")
    } else {
      setToastColor("bg-danger")

      setToastIsOpen(true)
      
      setTimeout(() => {
        setToastIsOpen(false)
      }, 1000 * 3)

      setToastMessage("Email ou senha incorretos!")
    }
  }

  return (
    <>
      <Head>
        <title>Garciaflix - Login</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <main className={styles.main}>
        <HeaderGeneric 
          logoUrl="/" 
          btnUrl="/register" 
          btnContent="Quero fazer parte"
        />
        <Container className="py-5">
          <p className={styles.formTitle}>Bem vindo(a) de volta!</p>
          <Form className={styles.form} onSubmit={handleLogin}>
            <p className="text-center">
              <strong>Bem vindo(a) ao GaciaFlix!</strong>
            </p>
            <FormGroup>
              <Label for="email" className={styles.label}>
                E-MAIL
              </Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="Qual o seu email?" 
                required 
                className={styles.input} 
              />
            </FormGroup>
            <FormGroup>
              <Label for="password" className={styles.label}>
                SENHA
              </Label>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="Qual a sua senha?" 
                required 
                className={styles.input} 
              />
            </FormGroup>
            <Button type="submit" outline className={styles.formBtn}>ENTRAR</Button>
          </Form>
          <ToastComponent 
            color={toastColor} 
            isOpen={toastIsOpen} 
            message={toastMessage}
          />
        </Container>
        <Footer />
      </main>
    </>
  )
}

export default Login