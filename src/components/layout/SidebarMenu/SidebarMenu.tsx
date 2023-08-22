import React from "react"
import "./SidebarMenu.css";
import { FaHouse, FaFolder } from "react-icons/fa6";

function SidebarMenu({ isSidebarOpen }) {
  return (
    <>
      <div className="bg-light border-end" id="sidebar">
        <div className="list-group list-group-flush">
          <p className="text-success text-center ">
            <FaHouse className="me-2" />
            Dashboard
          </p>

          <a href="/oa" className="list-group-item list-group-item-action bg-light">
            <FaFolder className="me-2" />
            Meus OAs
          </a>

          {/* <a href="/turma" className="list-group-item list-group-item-action bg-light">
            <FaFolder className="me-2" />
            Turmas
          </a> */}
        </div>
      </div>
    </>
  )
}

export default SidebarMenu

