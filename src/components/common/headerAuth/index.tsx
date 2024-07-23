import { Container, Form, Input } from "reactstrap";
import styles from "./styles.module.scss";
import Link from "next/link";
import Modal from "react-modal"
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import profileService from "@/services/profileService";

const HeaderAuth = function() {
  const router = useRouter()
  const [initials, setInitials] = useState("")
  const [modalOpen, setModalOpen] = useState(false)
  const [searchName, setSearchName] = useState("")

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    router.push(`search?name=${searchName}`)

    setSearchName("")
  }

  const handleSearchClick = () => {
    router.push(`search?name=${searchName}`)

    setSearchName("")
  }

  useEffect(() => {
    profileService.fetchCurrent().then((user) => {
      const firstNameInitial = user.firstName.slice(0, 1)
      const lastNameInitial = user.lastName.slice(0, 1)
      setInitials(firstNameInitial + lastNameInitial)
    })
  }, [])

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleLogout = () => {
    sessionStorage.clear()

    router.push("/")
  }
  
  return (
    <>
      <Container className={styles.nav}>
        <Link href="/home" className="text-decoration-none">
          <img src="/logoGarciaflix.svg" alt="logoGarciaflix" className={styles.imgLogoNav}/>
        </Link>
        <div className="d-flex align-items-center">
          <Form onSubmit={handleSearch}>
            <Input 
              name="search" 
              type="search" 
              placeholder="Pesquisar" 
              className={styles.input} 
              value={searchName} 
              onChange={(event) => {
                setSearchName(event.currentTarget.value.toLowerCase())
              }}
            />
          </Form>
          <img 
            src="/homeAuth/iconSearch.svg" 
            alt="lupaHeader" 
            className={styles.searchImg}
            onClick={handleSearchClick}
            />
          <p className={styles.userProfile} onClick={handleOpenModal}>
            {initials}
          </p>
        </div>
        <Modal 
          isOpen={modalOpen} 
          onRequestClose={handleCloseModal} 
          shouldCloseOnEsc={true}
          className={styles.modal}
          overlayClassName={styles.overlayModal}
        >
          <Link href="/profile" className="text-decoration-none">
            <p className={styles.modalLink}>Meus Dados</p>
          </Link>
          <p className={styles.modalLink} onClick={handleLogout}>Sair</p>
        </Modal>
      </Container>
    </>
  )
}

export default HeaderAuth