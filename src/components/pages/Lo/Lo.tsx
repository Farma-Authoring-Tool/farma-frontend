import React from 'react'
import { Button } from 'react-bootstrap';
import Navbar from "../../layout/Navbar/Navbar";
import { HiPlus } from "react-icons/hi";
import './Lo.css';
import SidebarMenu from '../../layout/SidebarMenu/SidebarMenu';

function Lo() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
          <SidebarMenu />
        </div>

        <div className="main col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div>
            <h1 className='text-center p-3'>
              Objetos de Aprendizagem
            </h1>
          </div>

          <div className='row'>
            <div className="col card border-success oa d-flex justify-content-center align-items-center">
              <div className="card-body text-center">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <h5 className="card-title">OA Título</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-success">Ver Mais</a>
              </div>
            </div>

            <div className="col card border-success oa d-flex justify-content-center align-items-center">
              <div className="card-body text-center">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <h5 className="card-title">OA Título</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-success">Ver Mais</a>
              </div>
            </div>

            <div className="col card border-success oa d-flex justify-content-center align-items-center">
              <div className="card-body text-center">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <h5 className="card-title">OA Título</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-success">Ver Mais</a>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-end p-2">
            <Button className=" custom-icon-button btn btn-danger me-md-2 rounded-circle">
              <HiPlus />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lo;
