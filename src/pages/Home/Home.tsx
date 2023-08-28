import React from "react"
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import farmaLogo from "../../assets/farma.png";
import { Container, Button, Center } from '@mantine/core';
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Center maw="100%" h={350} mx="auto">
        <Container size="xs" px="xs">
          <div>
            <a href="https://vitejs.dev/" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev/" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <a href="https://farma.tsi.pro.br/" target="_blank">
              <img src={farmaLogo} className="logo react" alt="Farma logo" />
            </a>
          </div>
          <div>
            <h1>FARMA</h1>
            <p>Bem Vindo a FARMA</p>
          </div>
          <div>
            <Button onClick={() => navigate("/oa")} variant="outline" color="lime">
              Objetos de Aprendizagem
            </Button>
          </div>
        </Container>
      </Center>
    </>
  )
}

export default Home

