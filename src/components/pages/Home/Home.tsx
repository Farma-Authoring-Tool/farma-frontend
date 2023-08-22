import React from "react"
import reactLogo from "../../../assets/react.svg";
import viteLogo from "/vite.svg";
import farmaLogo from "../../../assets/farma.png";
import { Button } from "react-bootstrap";

import { Link, BrowserRouter as Router } from "react-router-dom"

function Home() {
  return (
    <>
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
        <Button variant="outline-primary">
          <Link to="/oa">Objetos de Aprendizagem</Link>
        </Button>
      </div>
    </>
  )
}

export default Home

