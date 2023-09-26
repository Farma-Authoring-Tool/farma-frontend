import React from "react"
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import farmaLogo from "../../assets/farma.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://farma.tsi.pro.br" target="_blank">
          <img src={farmaLogo} className="logo react" alt="Farma logo" />
        </a>
      </div>
      <h1>Farma</h1>
      <div className="card">
        <Button  onClick={() => navigate("/oa")} variant="outline"  color="cyan">Login</Button>
      </div>
    </>
  )
}

export default Home